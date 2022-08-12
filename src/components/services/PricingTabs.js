import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PricingCard from "./PricingCard";
import { height } from "@mui/system";

const cardData = [
  {
    id: 1,
    title: "Hair Cutting & Fitting",
    description: "Clean & simple 30-40 minutes",
    icon: "https://demo.webtend.net/html/qutter/assets/images/price/pp-image1.jpg",
  },
  {
    id: 2,
    title: "Shaving & Facial",
    description: "Clean & simple 30-40 minutes",
    icon: "https://demo.webtend.net/html/qutter/assets/images/price/pp-image2.jpg",
  },
  {
    id: 3,
    title: "Hair Color & Wash",
    description: "Clean & simple 30-40 minutes",
    icon: "https://demo.webtend.net/html/qutter/assets/images/price/pp-image3.jpg",
  },
  {
    id: 4,
    title: "Body Massage",
    description: "Clean & simple 30-40 minutes",
    icon: "https://demo.webtend.net/html/qutter/assets/images/price/pp-image4.jpg",
  },
  {
    id: 5,
    title: "Beauty & Spa",
    description: "Clean & simple 30-40 minutes",
    icon: "https://demo.webtend.net/html/qutter/assets/images/price/pp-image5.jpg",
  },
  {
    id: 6,
    title: "Facial & Face Wash",
    description: "Clean & simple 30-40 minutes",
    icon: "https://demo.webtend.net/html/qutter/assets/images/price/pp-image6.jpg",
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const PricingTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className=" bg-white my-12 mx-auto" sx={{ width: "58%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          className="pt-12"
          centered={true}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          aria-label="basic tabs example"
        >
          <Tab label="Hair Solutions" {...a11yProps(0)} />
          <Tab label="Beauty & Spa" {...a11yProps(1)} />
          <Tab label="Body Treatment" {...a11yProps(2)} />
          <Tab label="Face Washing" {...a11yProps(3)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <div className="flex justify-center space-x-10 ">
          <PricingCard
            title={cardData[0].title}
            icon={cardData[0].icon}
            description={cardData[0].description}
          />
          <PricingCard
            title={cardData[1].title}
            icon={cardData[1].icon}
            description={cardData[1].description}
          />
        </div>
        <div className="flex justify-center space-x-10 ">
          <PricingCard
            title={cardData[2].title}
            icon={cardData[2].icon}
            description={cardData[2].description}
          />
          <PricingCard
            title={cardData[3].title}
            icon={cardData[3].icon}
            description={cardData[3].description}
          />
        </div>
        <div className="flex justify-center space-x-10 ">
          <PricingCard
            title={cardData[4].title}
            icon={cardData[4].icon}
            description={cardData[4].description}
          />
          <PricingCard
            title={cardData[5].title}
            icon={cardData[5].icon}
            description={cardData[5].description}
          />
        </div>
      </TabPanel>

      <div className="flex justify-center">
        <TabPanel value={value} index={1}>
          <div className="flex justify-center space-x-10 ">
            <PricingCard
              title={cardData[4].title}
              icon={cardData[4].icon}
              description={cardData[4].description}
            />
            <PricingCard
              title={cardData[3].title}
              icon={cardData[3].icon}
              description={cardData[3].description}
            />
          </div>
          <div className="flex justify-center space-x-10 ">
            <PricingCard
              title={cardData[5].title}
              icon={cardData[5].icon}
              description={cardData[5].description}
            />
            <PricingCard
              title={cardData[1].title}
              icon={cardData[1].icon}
              description={cardData[1].description}
            />
          </div>
          <div className="flex justify-center space-x-10 ">
            <PricingCard
              title={cardData[1].title}
              icon={cardData[1].icon}
              description={cardData[1].description}
            />
            <PricingCard
              title={cardData[2].title}
              icon={cardData[2].icon}
              description={cardData[2].description}
            />
          </div>
        </TabPanel>
      </div>
      <TabPanel value={value} index={2}>
        <div className="flex justify-center space-x-10 ">
          <PricingCard
            title={cardData[2].title}
            icon={cardData[2].icon}
            description={cardData[2].description}
          />
          <PricingCard
            title={cardData[3].title}
            icon={cardData[3].icon}
            description={cardData[3].description}
          />
        </div>
        <div className="flex justify-center space-x-10 ">
          <PricingCard
            title={cardData[1].title}
            icon={cardData[1].icon}
            description={cardData[1].description}
          />
          <PricingCard
            title={cardData[5].title}
            icon={cardData[5].icon}
            description={cardData[5].description}
          />
        </div>
        <div className="flex justify-center space-x-10 ">
          <PricingCard
            title={cardData[4].title}
            icon={cardData[4].icon}
            description={cardData[4].description}
          />
          <PricingCard
            title={cardData[3].title}
            icon={cardData[3].icon}
            description={cardData[3].description}
          />
        </div>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <div className="flex justify-center space-x-10 ">
          <PricingCard
            title={cardData[0].title}
            icon={cardData[0].icon}
            description={cardData[0].description}
          />
          <PricingCard
            title={cardData[1].title}
            icon={cardData[1].icon}
            description={cardData[1].description}
          />
        </div>
        <div className="flex justify-center space-x-10 ">
          <PricingCard
            title={cardData[2].title}
            icon={cardData[2].icon}
            description={cardData[2].description}
          />
          <PricingCard
            title={cardData[3].title}
            icon={cardData[3].icon}
            description={cardData[3].description}
          />
        </div>
        <div className="flex justify-center space-x-10 ">
          <PricingCard
            title={cardData[4].title}
            icon={cardData[4].icon}
            description={cardData[4].description}
          />
          <PricingCard
            title={cardData[5].title}
            icon={cardData[5].icon}
            description={cardData[5].description}
          />
        </div>
      </TabPanel>
    </Box>
  );
};

export default PricingTabs;
