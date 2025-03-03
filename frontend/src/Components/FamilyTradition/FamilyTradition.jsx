import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import familymember from "../../assets/family.png";
import { FamilyTraditionStyle } from "./FamilyTradition.js";

const FamilyTradition = () => {
  const [expanded, setExpanded] = useState({ first: false, second: false });

  // Check if screen size is small (below 'md' breakpoint)
  const isSmallScreen = useMediaQuery("(max-width: 900px)");

  const toggleExpand = (card) => {
    setExpanded((prev) => ({ ...prev, [card]: !prev[card] }));
  };

  return (
    <Box sx={FamilyTraditionStyle.FTCtoainer}>
      <Box sx={FamilyTraditionStyle.FTWrapper}>
        <Typography variant="h2" sx={FamilyTraditionStyle.FTtitle}>
          A Family Tradition of Purity
        </Typography>
        <Box sx={FamilyTraditionStyle.FtCardContainer}>

          {/* First Card */}
          <Box sx={FamilyTraditionStyle.FTcard}>
            <Box sx={FamilyTraditionStyle.ftrImgside}>
              <Box
                component="img"
                src={familymember}
                alt="Family Member"
                sx={FamilyTraditionStyle.ftImage}
              />
            </Box>
            <Box sx={FamilyTraditionStyle.fttextside}>
              <Typography variant="h4" sx={FamilyTraditionStyle.FTcardTitle}>
                The Foundation
              </Typography>
              <Typography variant="body1" sx={FamilyTraditionStyle.cardText}>
                {isSmallScreen && !expanded.first
                  ? `Our journey began with [Grandfather’s Name], a skilled artisan
                     who established our gold business with a commitment to purity...`
                  : `Our journey began with [Grandfather’s Name], a skilled artisan
                     who established our gold business with a commitment to purity
                     and craftsmanship. With unwavering dedication, he meticulously
                     handcrafted each piece, ensuring the finest quality and authenticity.
                     His honesty and passion for the art of jewelry-making quickly earned
                     him a reputation among the community, and soon, people from far and wide
                     sought his creations.`}
              </Typography>
              {isSmallScreen && (
                <Button sx={FamilyTraditionStyle.ftcardbtn} onClick={() => toggleExpand("first")}>
                  {expanded.first ? "Read Less" : "Read More"}
                </Button>
              )}
            </Box>
          </Box>

          {/* Second Card */}
          <Box sx={FamilyTraditionStyle.FTcard}>
            <Box sx={FamilyTraditionStyle.fttextside}>
              <Typography variant="h4" sx={FamilyTraditionStyle.FTcardTitle}>
                Innovation & Growth
              </Typography>
              <Typography variant="body1" sx={FamilyTraditionStyle.cardText}>
                {isSmallScreen && !expanded.second
                  ? `[Father’s Name] carried the legacy forward, skillfully blending
                     tradition with modern designs...`
                  : `[Father’s Name] carried the legacy forward, skillfully blending
                     tradition with modern designs. With a deep respect for the craftsmanship
                     passed down through generations, he saw an opportunity to evolve while
                     staying true to the principles of purity and excellence. Under his leadership,
                     our brand expanded beyond its humble beginnings, reaching new horizons in both
                     design and scale. He introduced contemporary aesthetics, intricate detailing,
                     and globally inspired patterns while ensuring that the soul of handcrafted
                     artistry remained intact.`}
              </Typography>
              {isSmallScreen && (
                <Button sx={FamilyTraditionStyle.ftcardbtn} onClick={() => toggleExpand("second")}>
                  {expanded.second ? "Read Less" : "Read More"}
                </Button>
              )}
            </Box>
            <Box sx={FamilyTraditionStyle.ftrImgside}>
              <Box
                component="img"
                src={familymember}
                alt="Family Member"
                sx={FamilyTraditionStyle.ftImage}
              />
            </Box>
          </Box>

        </Box>
      </Box>
    </Box>
  );
};

export default FamilyTradition;
