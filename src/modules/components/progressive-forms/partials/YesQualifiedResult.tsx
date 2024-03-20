import { Box, Grid, Stack, Typography } from "@mui/material";
import { Suspense, useState } from "react";
import { GiPartyPopper } from "react-icons/gi";
import appConfig from "../../../../config/app.config";
import StyledButton from "../../StyledButton";
import CalendarBookACallWidget from "../../calendars/CalendarBookACallWidget";
import { FaPhone } from "react-icons/fa";

const textSx = { mb: 2 };

const vslStorageUrl = `${appConfig.storageUrls.vslVideos}/Growth-Partner-Program/book-a-call`;
const vslVideoVariants = {
  gppCalcSuccessBookCall: [
    {
      src: `${vslStorageUrl}/VID_20240314_165007%5B2%5D.mp4`,
      // cover: `${vslStorageUrl}/book-a-call/VID_20240314_165007%5B2%5D-Cover.jpg`,
    },
  ],
};

const YesQualifiedResult: React.FC = () => {
  const vslVariants = vslVideoVariants.gppCalcSuccessBookCall;

  const [
    selectedVariant,
    // setSelectedVariant
  ] = useState(vslVariants[0]);
  const [showBookingCalendar, setShowBookingCalendar] = useState(false);

  const handleConfirmation = () => {
    setShowBookingCalendar(true);
  };

  if (showBookingCalendar) {
    return <CalendarBookACallWidget />;
  }

  return (
    <Box sx={{ width: "min(50rem,90%)", margin: "0 auto" }}>
      <Grid
        container
        direction="column"
        justifyContent="space-around"
        alignItems="stretch"
        style={{ minHeight: "100vh" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 2,
            mt: 2,
          }}
        >
          <GiPartyPopper size={50} style={{ marginRight: "1rem" }} />
          <Typography
            variant="h3"
            className="title-margin"
            sx={{ textAlign: "center" }}
          >
            Aunque todo parece correcto...
          </Typography>
        </Box>
        <Typography variant="subtitle1" sx={textSx}>
          Un humano revisará tus resultados antes de enviártelos...
          <br />
          ¡Y ese humano soy yo: Alex!
        </Typography>
        <Stack sx={{ margin: "1rem auto" }}>
          <Suspense fallback={`Cargando vídeo...`}>
            <video
              controls
              autoPlay
              // poster={selectedVariant.cover}
              width="90%"
              style={{ margin: "0 auto" }}
            >
              <source src={selectedVariant.src} type="video/mp4" />
              Tu navegador no soporta el vídeo.
            </video>
          </Suspense>
        </Stack>
        <Typography
          variant="h6"
          component="p"
          sx={{ marginTop: 2, fontSize: "1rem" }}
        >
          Puede que tarde un poco... pero te los{" "}
          <b>enviaré tan pronto como sea posible</b>.
          <br />
          Te sugiero que{" "}
          <strong>
            reserves una llamada conmigo para estudiar tu caso en detalle.
          </strong>{" "}
          y saber en qué partes de tu negocio puedo ayudarte a crecer.
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{ mt: 2, mb: 2, fontSize: "1rem" }}
        >
          ¡Es el momento de actuar hoy para cambiar el mañana!
        </Typography>

        <StyledButton onClick={handleConfirmation}>
          <FaPhone style={{ marginRight: "0.5rem" }} />
          Agendar llamada para estudiar mi caso concreto
        </StyledButton>
      </Grid>
    </Box>
  );
};

export default YesQualifiedResult;
