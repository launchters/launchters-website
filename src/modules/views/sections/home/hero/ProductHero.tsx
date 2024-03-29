import { Grid, Stack, TypographyOwnProps } from "@mui/material";
import heroImage from "../../../../../assets/hero_image5.svg";
import appConfig from "../../../../../config/app.config";
import ProductHeroSubtitle from "../../../../components/ProductHeroSubtitle";
import Typography from "../../../../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";

const backgroundImage: string =
  "https://plus.unsplash.com/premium_photo-1664300162579-6a4f1084dd63?auto=format&fit=crop&w=1400";

const titleProps: TypographyOwnProps = {
  color: "inherit",
  variant: "h1",
  sx: {
    fontSize: { xs: "2rem", md: "2.5rem" },
    textAlign: "left",
  },
};
// const trustProps: TypographyOwnProps = {
//   ...subtitleProps,
//   variant: "h3",
//   mt: 0,
//   mb: 0,
//   fontWeight: 400,
//   sx: { ...subtitleProps.sx, textDecoration: "italic" },
// };

export default function ProductHero() {
  return (
    <ProductHeroLayout {...{ backgroundImage }}>
      <Stack direction="row">
        <Grid
          item
          xs={12}
          md={9}
          sx={{ order: { xs: 1, md: 1 }, pr: { xs: 0, sm: 6, md: 12 } }}
        >
          <Grid container flexDirection="column">
            <Grid item sx={{ pt: { xs: 5 } }}>
              <Typography {...titleProps} component="h1">
                <div
                  className="d-block"
                  style={{ textAlign: appConfig.header.textAlign }}
                >
                  <mark>Escala {appConfig.offerLong.qty}</mark>
                  <span className="text-shadow">
                    {` tus ${appConfig.offerLong.keyword} `}
                  </span>
                  {/* <span className="text-shadow">{`en ${appConfig.offerLong.time} `}</span> */}{" "}
                </div>
                <div
                  className="d-block text-shadow page-subtitle"
                  style={{
                    textAlign: appConfig.header.textAlign,
                    marginTop: 6,
                  }}
                >
                  como COACH, en sólo 1 año.
                </div>
              </Typography>
            </Grid>
            <Grid item>
              <ProductHeroSubtitle />
            </Grid>

            {/* <Grid item>
              <Typography {...subtitleProps} className="block">
                que han <strong>generado US $7.800+ millones.</strong>
              </Typography>
            </Grid> */}
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
          sx={{
            order: { xs: 2, md: 2 },
            p: 2,
            m: "auto",
            maxWidth: { xs: "80vw", md: "unset" },
          }}
        >
          <img
            src={heroImage}
            alt="Launchters | Launch and Scale your mentoring/coaching business."
            width="100%"
            height="auto"
          />
        </Grid>

        <ProductHeroSubtitle
          sx={{
            //  Only show in mobile
            display: { xs: "block", md: "none" },
            order: 2,
          }}
        />
      </Stack>
    </ProductHeroLayout>
  );
}
