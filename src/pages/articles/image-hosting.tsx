/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

import Article from '../../components/Article';

export const frontmatter = {
  title: 'Image Hosting Services',
  headline: 'Image Hosting Services: Share Your Experiences Online!',
  description:
    'Share your photos online with image hosting services: Compare what different image hosting sites offer you',
  date: '2008-06-02',
  authors: [
    {name: 'Beau Hartshorne', link: 'mailto:hartshorne@gmail.com'},
    {
      name: 'Mike Dascal',
      link: 'http://www.mykcreative.com/',
    },
  ],
};

export default (props: PageProps) => (
  <Article {...props} frontmatter={frontmatter}>
    <p>
      One of the most popular uses for the Internet today is the sharing pictures among friends and loved ones. Setting
      up your own online photo album is easy, fast, and best of all, can be totally free! You could be sending picture
      of your vacations, your special occasions, or even your newborn family additions in less than an hour!
    </p>

    <p>
      There are a couple sites that offer image hosting services along with a bunch of other extras to, so you may want
      to see what's out there before you sign up to one of them. We'll go through some of the bigger ones here so you
      can see how their photo sharing methods are different and give you an idea of what each offers.
    </p>

    <h3>
      <a href="http://flickr.com/">Flickr</a>
    </h3>

    <p>
      As one of the largest image hosting websites, Flickr offers a number of basic services absolutely free, such as
      uploading your photos and creating albums (for public or private viewing). It also allows you to connect your
      yahoo account to your albums and lets you network with your friends and family. For certain fees, you can get a
      'pro account', which lets you upload and store more photo, or order a number of products made with the images you
      upload, from prints to photo books to even postage stamps!
    </p>

    <h3>
      <a href="http://photobucket.com/">Photobucket</a>
    </h3>

    <p>
      Photobucket is a lot like Flickr, and it also offers a 'free account' and a 'pro account'. There are a couple
      differences between the service levels, but if this is your first time opening an online photo album account you
      should probably start with the free one and upgrade to the Pro account if you eventually find things aren't
      meeting your needs. The largest difference between Photobucket and Flickr is probably that Photobucket seems
      geared more towards people who want to share their photos with the world, whereas Flickr is more for people who
      want to share their pictures with their friends and family.
    </p>

    <h3>
      <a href="https://www.smugmug.com/">SmugMug</a>
    </h3>

    <p>
      SmugMug is designed for people who want to invest in a completely personalizable and professional style photo
      gallery online. They offer three services levels starting at $39.95 a year, which can allow not only for your own
      domain name, but also let you monitor traffic to your site, order professional prints, and place watermarks on
      your work so no one can copy it without ordering a proper print from you. SmugMug also lets you order prints, as
      well as all sorts of items with your photos printed on them, including bags, mugs, keychains, coasters, and tons
      more.
    </p>

    <p>
      There are many other tools online for you to organize and edit your photos. Some of these sites have some software
      built into them, while others offer powerful online photo editing software so you can get rid of the redeye before
      you share your photos with the world!
    </p>

    <p>Good luck, and happy picture sharing!</p>
  </Article>
);
