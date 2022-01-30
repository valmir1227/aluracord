import appConfig from "../pages/config.json";
import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import React, { useEffect, useState } from "react";
// Hooks (ganchos) do roteamento
import { useRouter } from "next/router";

function Titulo(props) {
  const Tag = props.tag || "h1";
  return (
    // Tag vazia para agrupar estilos
    <>
      {/* Para pegar valores das propriedades deve-se usar { }*/}
      <Tag>{props.children}</Tag>

      <style jsx>
        {`
          ${Tag} {
            color: ${appConfig.theme.colors.neutrals[100]};
            font-weight: 600;
          }
        `}
      </style>
    </>
  );
}

//Componente React
//function HomePage() {
//return (
//<div>
//{/*Chama os estilos globais (reset)*/}
// <GlobalStyle />
//<Title tag="h2">Boas vindas de volta!</Title>
// <h2>Discord - Alura Matrix</h2>
// </div>
///);
//}
//

//export default HomePage;
export default function PaginaInicial() {
  // const username = 'omariosouto';
  const [username, setUsername] = React.useState("");

  //State  do react (2) ['', ƒ()] o segundo argumento é uma função
  const roteamento = useRouter();

  if (username.length > 2) {
    fetch(`https://api.github.com/users/${username}`).then((res) => res.json());
  }

  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
            "url(https://images4.alphacoders.com/116/1163349.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            maxWidth: "700px",
            borderRadius: "6px",
            padding: "32px",
            margin: "16px",
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              //2 Maneiras de mudar a página => // window.location.href = '/chat' | |
              roteamento.push(`/chat?username=${username}`);
            }}
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <Titulo Tag="h2">Bem vindo ao Aluracord</Titulo>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: "32px",
                color: appConfig.theme.colors.neutrals[400],
              }}
            >
              {appConfig.name}
            </Text>

            {/* <input
                            type="text"
                            value={username}
                            onChange={function (event) {
                                console.log('usuario digitou', event.target.value);
                                // Onde ta o valor?
                                const valor = event.target.value;
                                // Trocar o valor da variavel
                                // através do React e avise quem precisa
                                setUsername(valor);
                            }}
                        /> */}
            <TextField
              value={username}
              onChange={function (event) {
                // Onde ta o valor?
                const valor = event.target.value;
                // Trocar o valor da variavel
                setUsername(valor);
                // através do React e avise quem precisa
              }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[400],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[900],
                  backgroundColor: appConfig.theme.colors.neutrals[900],
                },
              }}
            />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[900],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[800],
              }}
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "200px",
              padding: "16px",

              background: "rgba(199, 159, 67, 0.3)",
              boxshadow: "0 4px 30px rgba(0, 0, 0, 0)",
              backdropfilter: "blur(3.3px)",
              border: "1px solid rgba(199, 159, 67,1)",

              borderRadius: "10px",
              flex: 1,
              minHeight: "240px",
            }}
          >
            <Image
              styleSheet={{
                borderRadius: "50%",
                marginBottom: "16px",
              }}
              src={
                username.length >= 3
                  ? `https://github.com/${username}.png`
                  : `https://images.unsplash.com/photo-1501430845499-9f39b78dd698?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FsbXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60`
              }
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: "3px 10px",
                borderRadius: "1000px",
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}
