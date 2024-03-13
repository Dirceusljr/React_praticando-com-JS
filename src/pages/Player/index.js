import Banner from "components/Banner";
import styles from "./Player.module.css";
import React, { useEffect, useState } from "react";
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import NaoEncontrada from "pages/NaoEncontrada";

function Player() {
  const [video, setVideo] = useState();
  const parametro = useParams();

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/Dirceusljr/cinetag-api/videos?id=${parametro.id}`)
    .then(response => response.json())
    .then(data => {
      setVideo(...data)
    })
  })

  if (!video) {
    return <NaoEncontrada />;
  }

  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </section>
    </>
  );
}

export default Player;
