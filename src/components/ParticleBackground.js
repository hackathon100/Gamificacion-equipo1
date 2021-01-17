import React from 'react'
import Particles from 'react-particles-js'

export const ParticleBackground = () => (
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#0c164f',
      zIndex: -2
    }}
  >
    <Particles
      params={{
        particles: {
          number: {
            value: 10,
            density: {
              enable: true,
              value_area: 500
            }
          },
          line_linked: {
            enable: false
          },
          opacity: {
            anim: {
              enable: false
            }
          },
          move: {
            speed: 0.5,
            out_mode: 'out',
            direction: 'bottom'
          },
          shape: {
            type: ['image'],
            image: [
              {
                src: '/images/planets/planet_1.png',
                height: 20,
                width: 20
              },
              {
                src: '/images/planets/planet_2.png',
                height: 20,
                width: 20
              },
              {
                src: '/images/planets/planet_3.png',
                height: 20,
                width: 20
              },
              {
                src: '/images/planets/planet_4.png',
                height: 20,
                width: 20
              },
              {
                src: '/images/planets/planet_5.png',
                height: 20,
                width: 20
              },
              {
                src: '/images/planets/planet_6.png',
                height: 20,
                width: 20
              },
              {
                src: '/images/planets/planet_7.png',
                height: 20,
                width: 20
              },
              {
                src: '/images/planets/planet_8.png',
                height: 20,
                width: 20
              }
            ]
          },
          color: {
            value: '#CCC'
          },
          size: {
            value: 30,
            random: true
          }
        },
        retina_detect: true
      }}
    />
  </div>
)
