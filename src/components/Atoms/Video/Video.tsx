import React from 'react';

interface Props {
  link: string;
}

function Video({ link }: Props) {
  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <video controls width="auto" height="auto">
      <source src={link} />
    </video>
  );
}

export default Video;
