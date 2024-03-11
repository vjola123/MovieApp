import React from 'react';
import { Descriptions } from 'antd';
import styles from './Styles.module.css';

interface Props {
  movieId?: string;
  movieTitle?: string;
  original_title?: string;
  description?: string;
  director?: string;
  release_date?: string;
  producer?: string;
  image?: string;
  running_time?: number;
}

const MovieDescriptions: React.FC<Props> = ({
  movieId,
  movieTitle,
  original_title,
  description,
  director,
  release_date,
  producer,
  image,
  running_time,
}) => {
  const items = [
    {
      key: '1',
      label: 'movieId',
      children: <p>{movieId}</p>,
    },
    {
      key: '2',
      label: 'movieTitle',
      children: <p>{movieTitle}</p>,
    },
    {
      key: '3',
      label: 'original_title',
      children: <p>{original_title}</p>,
    },
    {
      key: '4',
      label: 'director',
      children: <p>{director}</p>,
    },
    {
      key: '5',
      label: 'release_date',
      children: <p>{release_date}</p>,
    },
    {
      key: '6',
      label: 'producer',
      children: <p>{producer}</p>,
    },
    {
      key: '7',
      label: 'image',
      children: <p>{image}</p>,
    },
    {
      key: '8',
      label: 'running_time',
      children: <p>{running_time}</p>,
    },
    {
        key: '9',
        label: 'description',
        children: <p>{description}</p>,
      },
  ];

  return (
    <Descriptions className={styles.MovieDetailsDetails} title="Movie Details" bordered items={items} />
  );
};

export default MovieDescriptions;
