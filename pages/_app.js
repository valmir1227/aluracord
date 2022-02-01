//Cria os estilos globais da aplicação
function GlobalStyle() {
  return (
    <style global jsx>
      {`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        body {
          font-family: "Open Sans", sans-serif;
        }
        /* App fit Height */
        html,
        body,
        #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */

        html {
          overflow: scroll;
          overflow-x: hidden;
        }
        ::-webkit-scrollbar {
          width: 0px; /* Remove scrollbar space */
          background: transparent; /* Optional: just make scrollbar invisible */
        }
      `}
    </style>
  );
}

export default function MyApp({ Component, pageProps }) {
  // console.log("Roda em todas as páginas!");
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps}></Component>
    </>
  );
}
