import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";
import { Box } from "@mui/system";
import { useMediaQuery, useTheme } from '@mui/material';

export default function ParticlesBackground() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))

    const optionsMobile = useMemo(() => {
        return {
            background: {
                color: "#041C32"
            },
            fullScreen: {
                enable: false
            },
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    }
                },
                modes: {
                    repulse: {
                        distance: 150
                    },
                    push: {
                        quantity: 2,
                      },
                }
            },
            particles: {
                links: {
                    enable: true
                },
                color: {
                    enable: true,
                    value: '#e3f2fd'
                },
                move: {
                    enable: true,
                    size: { value: { min: 1, max: 3 }},
                },
                size: {
                    value: { min: 1, max: 3 }
                },
                opacity: {
                    value: { min: 0.3, max: 0.7 }
                },
                number: {
                    density: {
                      enable: false,
                      area: 1000,
                    },
                    limit: 50,
                    value: 30,
                  },
                reduceDuplicates: {
                    enable: true
                }
            },
        }
    }, []);


    const options = useMemo(() => {
        return {
            background: {
                color: "#041C32"
            },
            fullScreen: {
                enable: false
            },
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    }
                },
                modes: {
                    repulse: {
                        distance: 150
                    },
                    push: {
                        quantity: 2,
                      },
                }
            },
            particles: {
                links: {
                    enable: true
                },
                move: {
                    enable: true,
                    size: { value: { min: 1, max: 3 }},
                },
                size: {
                    value: { min: 1, max: 3 }
                },
                opacity: {
                    value: { min: 0.3, max: 0.7 }
                },
                number: {
                    density: {
                      enable: false,
                      area: 1000,
                    },
                    limit: 100,
                    value: 30,
                  },
                reduceDuplicates: {
                    enable: true
                }
            },
        }
    }, []);

    const particlesInit = useCallback((engine) => {
        loadSlim(engine);
    });
    return (
        <Box>
            <Box className='dashboardShadow'></Box>
            <Particles init={particlesInit} options={ isMobile ? optionsMobile : options} canvasClassName="dashboardBgContainer" className='dashboardBg' />
        </Box>
    );
  };
