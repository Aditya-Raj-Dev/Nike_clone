import React, { useEffect } from "react";
import { useState } from "react";
import { Heading } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

const Filter = (props) => {
  const [color, setColor] = useState([]);
  const [category, setCategory] = useState([]);
  const col = [...new Set(props.color)];
  const cat = [...new Set(props.category)];

  const [searchparam, setSearchparam] = useSearchParams();
  const initialcolor = searchparam.getAll("color");
  const initialcategory = searchparam.getAll("category");
  const [colfilter, setColorfilter] = useState(initialcolor || []);
  const [catfilter, setCatfilter] = useState(initialcategory || []);

  function handlecolorfilter(e) {
    const newcolor = [...colfilter];
    if (newcolor.includes(e.target.value)) {
      newcolor.splice(newcolor.indexOf(e.target.value), 1);
    } else {
      newcolor.push(e.target.value);
    }
    setColorfilter(newcolor);
  }

  function handlecategoryfilter(e) {
    const newcategory = [...catfilter];
    if (newcategory.includes(e.target.value)) {
      newcategory.splice(newcategory.indexOf(e.target.value), 1);
    } else {
      newcategory.push(e.target.value);
    }
    setCatfilter(newcategory);
  }

  useEffect(() => {
    setColor([...new Set(props.color)]);
    setCategory([...new Set(props.category)]);

    if (catfilter || colfilter) {
      const param = {};
      catfilter && (param.category = catfilter);
      colfilter && (param.color = colfilter);
      setSearchparam(param);
    }
  }, [col.length, cat.length, catfilter, colfilter, searchparam]);

  return (
    <div style={{ width: "100%" }}>
      <Heading>FILTERS</Heading>
      <br />
      <Accordion allowMultiple>
        <AccordionItem>
          <h1>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontSize="20px">
                Category Filter
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h1>
          <AccordionPanel pb={4}>
            {category.map((item, i) => (
              <div
                style={{ display: "flex", gap: "10px", marginLeft: "20px" }}
                key={i}
              >
                <input
                  type="checkbox"
                  value={item}
                  style={{ height: "18px", width: "18px", marginTop: "3px" }}
                  checked={catfilter.includes(item)}
                  onChange={handlecategoryfilter}
                />
                <label style={{ fontSize: "18px" }}>{item}</label>
              </div>
            ))}
          </AccordionPanel>
        </AccordionItem>
        <br />
        <AccordionItem>
          <h1>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontSize="20px">
                Color Filter
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h1>
          <AccordionPanel pb={4}>
            {color.map((item, i) => (
              <div
                style={{ display: "flex", gap: "10px", marginLeft: "20px" }}
                key={i}
              >
                <input
                  type="checkbox"
                  value={item}
                  style={{ height: "18px", width: "18px", marginTop: "3px" }}
                  checked={colfilter.includes(item)}
                  onChange={handlecolorfilter}
                />
                <label style={{ fontSize: "18px" }}>{item}</label>
              </div>
            ))}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Filter;
