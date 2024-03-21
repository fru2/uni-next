import styled from "@emotion/styled";
import { Tooltip, tooltipClasses } from "@mui/material";
import { useState } from "react";
import { truncateComma } from "../utils/helperFunction";

// Component from https://mui.com/material-ui/react-tooltip/#customization
const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} followCursor />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 500,
    fontSize: 16,
    border: '1px solid #dadde9',
  },
}));

export default function CustomTooltip({ data, children }) {
  return (
    <HtmlTooltip title={
      <>
        <p>{data.Title}</p>
        <div className="flex border-t">
          <ul>
              {Object.values(data.Authors).map((item, index) => (
                <li key={index} className="text-xs">{item}</li>
              ))}
            </ul>
            <ul>
              {Object.values(data.Affiliations).map((item, index) => (
                <li key={index} className="text-xs">{truncateComma(item)}</li>
              ))}
            </ul>
        </div>
      </>
    }>
      {children}
    </HtmlTooltip>
  );
}
