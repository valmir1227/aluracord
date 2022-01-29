import { Box, Text, TextField, Image, Button } from "@skynexui/components";
import React from "react";
import appConfig from "../pages/config.json";

export default function ChatPage() {
  /* 
  (!) Usuário(a)
  - Usuário digita no campo textarea  
  - Aperta enter para enviar
  - Tem que adicionar o texto na listagem

  (!) Dev
  - Criar campo
  - Usar onchage e usestate (if  para limpar variável)
  - Lista de mensagem
*/

  const [mensagem, setMensagem] = React.useState("");
  const [listaDeMensagem, setListaDeMensagens] = React.useState([]);

  function handleNovaMensagem(novaMensagem) {
    const mensagem = {
      id: listaDeMensagem.length + 1,
      de: "valmir",
      texto: novaMensagem,
    };

    setListaDeMensagens([mensagem, ...listaDeMensagem]);
  }

  return (
    <Box
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: appConfig.theme.colors.primary[500],
        backgroundImage: `url(https://images4.alphacoders.com/116/1163349.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "multiply",
        color: appConfig.theme.colors.neutrals["000"],
      }}
    >
      <Box
        styleSheet={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          borderRadius: "5px",

          background: "rgba(199, 159, 67, 0.3)",
          boxshadow: "0 4px 30px rgba(0, 0, 0, 0)",
          backdropfilter: "blur(3.3px)",
          border: "1px solid rgba(199, 159, 67,1)",

          height: "100%",
          maxWidth: "75%",
          maxHeight: "95vh",
          padding: "32px",
          overflow: "hidden",
        }}
      >
        <Header />
        <Box
          styleSheet={{
            position: "relative",
            display: "flex",
            justifyContent: "flex-end",
            border: "1px solid rgba(199, 159, 67,1)",
            flex: 1,
            height: "80%",
            backgroundColor: appConfig.theme.colors.neutrals[900],
            flexDirection: "column",
            borderRadius: "5px",
            padding: "16px",
          }}
        >
          <MessageList mensagem={listaDeMensagem} />

          {/*{listaDeMensagem.map((mensagemAtual) => {
            return (
              <li key={mensagemAtual.id}>
                {mensagemAtual.de}: {mensagemAtual.texto}
              </li>
            );
          })} */}

          <Box
            as="form"
            styleSheet={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField
              value={mensagem}
              onChange={(event) => {
                const valor = event.target.value;
                setMensagem(valor);
              }}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  if (mensagem != "" && mensagem != "\n" * 1) {
                    handleNovaMensagem(mensagem);
                    event.preventDefault();
                    setMensagem("");
                  }
                }
              }}
              placeholder="Insira sua mensagem aqui..."
              type="textarea"
              styleSheet={{
                width: "100%",
                border: "0",
                resize: "none",
                borderRadius: "5px",
                backgroundColor: appConfig.theme.colors.neutrals[800],
                marginRight: "12px",
                color: appConfig.theme.colors.neutrals[200],
              }}
            />
            <Box>
              <Button
                onClick={(event) => {
                  if (mensagem != "") {
                    handleNovaMensagem(mensagem);
                    event.preventDefault();
                    setMensagem("");
                  }
                }}
                type="button"
                label="Enviar"
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["000"],
                  mainColor: appConfig.theme.colors.primary[900],
                  mainColorLight: appConfig.theme.colors.primary[400],
                  mainColorStrong: appConfig.theme.colors.primary[800],
                }}
                styleSheet={{
                  marginTop: "-10%",
                  padding: "13px",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Header() {
  return (
    <>
      <Box
        styleSheet={{
          width: "100%",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text variant="heading5">Chat</Text>
        <Button
          variant="tertiary"
          colorVariant="dark"
          label="Logout"
          href="/"
        />
      </Box>
    </>
  );
}

function MessageList(props) {
  return (
    <Box
      tag="ul"
      styleSheet={{
        overflow: "auto",

        display: "flex",
        flexDirection: "column-reverse",
        flex: 1,
        color: appConfig.theme.colors.neutrals["000"],
        marginBottom: "16px",
      }}
    >
      {props.mensagem.map((mensagem) => {
        return (
          <Text
            key={mensagem.id}
            tag="li"
            styleSheet={{
              borderRadius: "5px",
              padding: "6px",
              marginBottom: "12px",
              hover: {
                backgroundColor: appConfig.theme.colors.neutrals[700],
              },
            }}
          >
            <Box
              styleSheet={{
                marginBottom: "8px",
              }}
            >
              <Image
                styleSheet={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  display: "inline-block",
                  marginRight: "8px",
                }}
                src="https://github.com/valmir1227.png"
              />
              <Text tag="strong">{mensagem.de}</Text>
              <Text
                styleSheet={{
                  fontSize: "10px",
                  marginLeft: "1px",
                  color: appConfig.theme.colors.neutrals[300],
                }}
                tag="span"
              >
                {new Date().toLocaleDateString()}
              </Text>
            </Box>
            {mensagem.texto}
          </Text>
        );
      })}
    </Box>
  );
}
