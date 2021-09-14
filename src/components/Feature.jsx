import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Feature() {
  return (
    <>
      <div className="feature-contain">
        <section className="feature-box">
          <h1 className="pochteca-title pochteca-bg">Giro</h1>
          <p className="pochteca-p1">
            Comercio al por mayor y menor de toda clase de productos y artículos
            de ferretería y construcción en general.
            <br />
            Somos un aliado estratégico para las empresas que buscan realizar
            compras o proyectos de manera confiable y sin contratiempos. Nuestra
            experiencia nos permite brindarte un servicio totalmente
            personalizado, desarrollando cada proyecto a la medida de sus
            necesidades.
          </p>
        </section>
        <section>
          <img
            src="https://images.pexels.com/photos/374079/pexels-photo-374079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="giro"
            className="feature-img"
          />
        </section>
      </div>
      <h1 className="pochteca-title pochteca-bg">Galeria</h1>
      <section className="pochteca-carousel">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/a1.png"
              alt="Pochteca Galery"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/a2.png"
              alt="Pochteca Galery"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/a3.png"
              alt="Pochteca Galery"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/a4.png"
              alt="Pochteca Galery"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/a5.png"
              alt="Pochteca Galery"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/a6.png"
              alt="Pochteca Galery"
            />
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
}
