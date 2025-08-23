import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme,
} from "@mui/material";

const publications = [
  {
    title:
      "CAPS) climate change adapting people's society বিশেষ তত্ত্বাবধানে (CLC) community learning centre এর শুভ উদ্বোধন অনুষ্ঠানে উপস্থিত ছিলেন খুলনা",
    type: "facebook",
    iframe:
      "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FJournalist.Sharankhola.Bagerhat%2Fvideos%2F1325455928563352%2F&show_text=true&width=560&t=0",
    link: "https://www.facebook.com/Journalist.Sharankhola.Bagerhat/videos/1325455928563352/",
  },
  {
    title: "ইংরেজিতে অনর্গল কথা বলছে উপকূলের শিশুরা!",
    type: "facebook",
    iframe:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02zRypBhvXkMT2pPsBKmB9mTdVWweK2kCiDCYfd1F4e7pivBu9yNVSn3pkkvKgv9UJl%26id%3D61572729269078&show_text=true&width=500",
    link: "https://www.facebook.com/photo/?fbid=122130846770757642&set=a.122130097514757642",
  },
  {
    title: "ইংরেজিতে অনর্গল কথা বলছে উপকূলের শিশুরা!",
    type: "facebook",
    iframe:
      "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fsomoynews.tv%2Fvideos%2F1837148566857222%2F&show_text=true&width=560&t=0",
    link: "https://www.facebook.com/share/p/1B5YCC9tqw/",
  },
  {
    title: "বড় শিক্ষক যখন ক্ষুদে শিক্ষকের ছাত্র!!",
    type: "facebook",
    iframe:
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F61572729269078%2Fvideos%2F1010617047570730%2F&show_text=true&width=267&t=0",
    link: "https://www.facebook.com/share/v/19g2zSP68z/",
  },

  {
    title: "মাইন্ড ম্যাথ। ব্রেইন ভালো করে দিনে দিনে...…",
    type: "facebook",
    iframe:
      "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61572729269078%2Fvideos%2F718605014073531%2F&show_text=true&width=560&t=0",
    link: "https://www.facebook.com/share/v/173narxq7y/",
  },
  {
    title:
      "Phonics as per International Phonics Rules. After Assessment Class at Bridge School, CODEC. Sarankhola.",
    type: "facebook",
    iframe:
      "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61572729269078%2Fvideos%2F704475072151275%2F&show_text=true&width=560&t=0",
    link: "https://www.facebook.com/watch/?v=704475072151275",
  },
  {
    title:
      "কমিউনিটি লার্নিং সেন্টার CLC অভিভাবক মিটিং -এ আমাদের এডমিন ম্যাডাম, লামিয়া খন্দকার।…",
    type: "facebook",
    iframe:
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F61572729269078%2Fvideos%2F674685078604606%2F&show_text=true&width=267&t=0",
    link: "https://www.facebook.com/watch/?v=674685078604606",
  },
  {
    title:
      "Teachers' Training at CLC. MLTS- Multi Level Teaching System. 1.10 অর্থাৎ আপনি এক জন, আপনি শিক্ষে ১০ জনকে শিক্ষাবেন, অর্থাৎ...",
    type: "facebook",
    iframe:
      "https://www.facebook.com/plugins/video.php?height=322&href=https%3A%2F%2Fwww.facebook.com%2F61572729269078%2Fvideos%2F647312078060299%2F&show_text=true&width=560&t=0",
    link: "https://www.facebook.com/watch/?v=647312078060299",
  },
  {
    title: "Polythene free Bangladesh we want fertile land, more crops.",
    type: "facebook",
    iframe:
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2043037509529504%2F&show_text=true&width=267&t=0",
    link: "https://www.facebook.com/reel/2043037509529504",
  },
  {
    title: "Education for Climate Vulnerable Children. …",
    type: "facebook",
    iframe:
      "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61572729269078%2Fvideos%2F1746989839199805%2F&show_text=true&width=560&t=0",
    link: "https://www.facebook.com/watch/?v=1746989839199805",
  },
  {
    title: "Climate change adapting peoples",
    type: "facebook",
    iframe:
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1013351060215767%2F&show_text=true&width=267&t=0",
    link: "https://www.facebook.com/reel/1013351060215767",
  },
  {
    title:
      "Polythene free Bangladesh, our target is to increase fertility of land and getting more crops.",
    type: "facebook",
    iframe:
      "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61572729269078%2Fvideos%2F677712118025178%2F&show_text=true&width=560&t=0",
    link: "https://www.facebook.com/watch/?v=677712118025178",
  },
  {
    title:
      "ক্যাপস-এর অধীনে জলবায়ু পরিবর্তন ও এর নেতিবাচক প্রভাব থেকে জীবজগৎ কে বাঁচাতে কাজ করছে এক ঝাঁক নিবেদিত…",
    type: "facebook",
    iframe:
      "https://www.facebook.com/plugins/video.php?height=316&href=https%3A%2F%2Fwww.facebook.com%2F61572729269078%2Fvideos%2F1173940100758759%2F&show_text=true&width=560&t=0",
    link: "https://www.facebook.com/watch/?v=1173940100758759",
  },
];

function Publications() {
  const theme = useTheme();

  return (
    <Box sx={{ width: "100%", pt: 8 }}>
      {/* Hero Section */}
      <Box sx={{ py: 8, backgroundColor: "#f8f9fa" }}>
        <Container maxWidth="xl">
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              textAlign: "center",
              mb: 4,
              color: theme.palette.primary.main,
              fontWeight: 700,
            }}
          >
            Publications & Success Stories
          </Typography>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              mb: 6,
              maxWidth: "900px",
              mx: "auto",
              color: "text.secondary",
              lineHeight: 1.6,
            }}
          >
            Explore our latest videos, impact reports, and success stories that
            showcase our work in rural development, education, and climate
            action.
          </Typography>
        </Container>
      </Box>

      {/* Publications Grid */}
      <Box sx={{ py: 8, backgroundColor: "#fff" }}>
        <Container maxWidth="xl">
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 6, textAlign: "center" }}
          >
            Featured Content
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {publications.map((publication, idx) => (
              <Grid item xs={12} md={6} lg={4} key={`publication-${idx}`}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    boxShadow: 3,
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                      transform: "translateY(-6px) scale(1.02)",
                      boxShadow: "0 8px 32px 0 rgba(102,126,234,0.16)",
                    },
                  }}
                >
                  {publication.type === "facebook" ? (
                    <Box sx={{ p: 2 }}>
                      <iframe
                        src={publication.iframe}
                        width="100%"
                        height="314"
                        style={{
                          border: "none",
                          overflow: "hidden",
                          borderRadius: "8px",
                        }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      />
                    </Box>
                  ) : (
                    <Box
                      component="img"
                      src={publication.image}
                      alt={publication.title}
                      sx={{
                        width: "100%",
                        height: 200,
                        objectFit: "cover",
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                      }}
                    />
                  )}
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      gutterBottom
                      sx={{
                        mb: 2,
                        color: theme.palette.primary.main,
                        lineHeight: 1.3,
                      }}
                    >
                      {publication.title}
                    </Typography>
                    {publication.description && (
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          mb: 3,
                          lineHeight: 1.6,
                        }}
                      >
                        {publication.description}
                      </Typography>
                    )}
                    <Button
                      href={publication.link}
                      variant="outlined"
                      color="primary"
                      target="blank"
                      size="medium"
                      sx={{
                        fontWeight: 600,
                        borderRadius: 2,
                        px: 3,
                        py: 1,
                      }}
                    >
                      {publication.type === "facebook"
                        ? "Watch Video"
                        : "Read More"}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ py: 8, backgroundColor: "#f8f9fa" }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, mb: 3, color: theme.palette.primary.main }}
            >
              Stay Connected
            </Typography>
            <Typography
              variant="h6"
              sx={{ mb: 4, color: "text.secondary", lineHeight: 1.6 }}
            >
              Follow us on social media for the latest updates, success stories,
              and behind-the-scenes content from our projects.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                fontWeight: 700,
                px: 5,
                py: 1.5,
                borderRadius: 2,
                fontSize: "1.1rem",
              }}
              href="https://www.facebook.com/CAPSBD"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow on Facebook
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Publications;
