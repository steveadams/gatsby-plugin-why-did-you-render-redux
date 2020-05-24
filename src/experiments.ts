/* Copyright 2005-present Instant Domain Search, Inc. */

import * as analytics from './analytics';
import {get, set} from './storage';

const experiments = {
  // Keep at least one experiment here otherwise TS breaks
  _example: {test: 1, control: 1},
};

export type SavedGroups = {[name: string]: string};

let cachedGroups: SavedGroups | null = null;

export function getGroups(): SavedGroups {
  if (cachedGroups) return cachedGroups;
  return (cachedGroups = JSON.parse(get('experiments') || '{}') as SavedGroups);
}

function saveGroups(groups: SavedGroups) {
  cachedGroups = groups;
  set('experiments', JSON.stringify(groups));
}

type Experiments = typeof experiments;
type ExperimentName = keyof Experiments;
type AnyExperiment = Experiments[ExperimentName];

function choose<Experiment extends AnyExperiment>(experiment: Experiment): keyof Experiment {
  let total = 0;
  for (const group in experiment) {
    total += experiment[group as keyof AnyExperiment];
  }
  const coinToss = Math.random() * total;
  let counter = 0;
  for (const group in experiment) {
    counter += experiment[group as keyof AnyExperiment];
    if (coinToss <= counter) return group;
  }
  for (const group in experiment) {
    return group;
  }
  throw new Error('No groups to choose from!');
}

export const getExperiment = <Experiment extends ExperimentName>(name: Experiment): keyof Experiments[Experiment] => {
  const experiment = experiments[name];
  const groups = getGroups();
  if (groups[name]) {
    const group = groups[name] as keyof Experiments[Experiment];
    // Check that the group still exists
    if (experiment[group] !== undefined) return group;
  }
  // Assign a new group
  const group = choose(experiment);
  analytics.event('experiment', name, group as string);
  groups[name] = group as string;
  saveGroups(groups);
  return group;
};

export const getAllExperiments = () => {
  const allExperiments: {[Name in keyof Experiments]?: keyof Experiments[Name]} = {};
  for (const name in experiments) {
    if (name.charAt(0) === '_') continue;
    allExperiments[name as ExperimentName] = getExperiment(name as ExperimentName);
  }
  return allExperiments;
};
