export const RESPONSIVE_CONFIG = {
  CONTAINER_FLEX_CONFIG: {
    m: '0',
    p: '0',
    direction: 'column',
    justify: {
      lg: 'flex-start',
      md: 'center',
      sm: 'center',
      '2sm': 'center',
    },
    maxW: '100vw',
    h: '100vh',
    className: 'Animation',
  },
  HEADING_CONFIG: {
    as: 'h1',
    pt: '2rem',
    pb: '2rem',
    size: '2xl',
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecoration: 'underline teal',
  },
  FLEX_CONFIG: {
    direction: {
      lg: 'row',
      md: 'column',
      sm: 'column',
      '2sm': 'column',
    },
    align: 'center',
    justify: {
      lg: 'space-around',
      md: 'center',
      sm: 'center',
      '2sm': 'center',
    },
  },

  HOME_CONFIG: {
    AVATAR_CONFIG: {
      className: 'Home__Avt',
      boxSize: {
        lg: '500px',
        md: '200px',
        sm: '200px',
        '2sm': '200px',
      },
    },
    IMAGE_CONFIG: {
      boxSize: {
        lg: '500px',
        md: '200px',
        sm: '200px',
      },
    },
    HEADING_CONFIG: {
      fontSize: {
        lg: '3rem',
        md: '3rem',
        sm: '2rem',
        '2sm': '2rem',
      },
      fontWeight: 'bold',
      fontStyle: 'italic',
      textAlign: 'center',
    },
    TEXT_CONFIG: {
      fontSize: {
        lg: '1.5rem',
        md: '1.5rem',
        sm: '1rem',
        '2sm': '1rem',
      },
      fontStyle: 'italic',
      textAlign: 'center',
    },
  },
  ABOUT_CONFIG: {
    AVATAR_CONFIG: {
      boxSize: {
        lg: '500px',
        md: '200px',
        sm: '100px',
        '2sm': '100px',
      },
      borderRadius: '50px',
    },
    FLEX_CONTENT_CONFIG: {
      maxW: {
        lg: '600px',
        md: '600px',
        sm: 'none',
        '2sm': 'none',
      },
      align: {
        lg: 'normal',
        md: 'normal',
        sm: 'center',
        '2sm': 'center',
      },
      text_align: {
        textAlign: {
          lg: 'left',
          md: 'center',
          sm: 'center',
          '2sm': 'center',
        },
      },
      table_config: {
        display: {
          lg: 'block',
          md: 'block',
          sm: 'none',
          '2sm': 'none',
        },
      },
      button_config: {
        mt: {
          lg: '0',
          md: '0',
          sm: '30px',
          '2sm': '30px',
        },
      },
    },
  },
  PORTFOLIO_CONFIG: {
    FLEX_CONFIG: {
      justify: 'space-around',
      align: 'center',
      direction: {
        lg: 'row',
        md: 'column',
        sm: 'column',
        '2sm': 'column',
      },
      link_item_config: {
        pb: {
          lg: '0',
          md: '0',
          sm: '0',
          '2sm': '0',
        },
        boxSize: {
          lg: '300px',
          md: '200px',
          sm: '200px',
          '2sm': '150px',
        },
        objectFit: 'cover',
      },
    },
  },
};
