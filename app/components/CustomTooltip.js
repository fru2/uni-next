import styled from "@emotion/styled";
import { Tooltip, tooltipClasses } from "@mui/material";
import { useState } from "react";
import { truncateComma } from "../utils/helperFunction";
import CardContainer from "./CardContainer";

// Component from https://mui.com/material-ui/react-tooltip/#customization
const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} followCursor />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#fff',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 500,
    fontSize: 16,
    border: '1px solid #dadde9',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
}));

export default function CustomTooltip({ data, children }) {

  const containsPesUniversity = (affiliation) =>
    affiliation.toLowerCase().includes("pes university");

  return (
    <HtmlTooltip title={
      <>
        <p>{data.Title}</p>
        {/* TODO: Change the inconsistent color i.e different color used in border and line break */}
        <div className="w-full h-[0.5px] bg-slate-600"></div>

        <table>
          <tr className="h-2"></tr>
          <tr className="">
            <td className="align-top mr-4 block"><span>Authors</span></td>
            <td>
              <div className="flex flex-wrap gap-2">
                {Object.values(data.Authors).map((item, index) => (
                  <span key={index} className="text-xs border-[1px] rounded-md px-2 py-1">{item}</span>
                ))}
              </div>
            </td>
          </tr>
          <tr className="min-h-4"></tr>
          <tr className="h-3"></tr>
          <tr>
            <td className="align-top mr-4 block"><span>Affiliations</span></td>
            <td>
              <div className="flex flex-wrap gap-2">
                {Object.values(data.Affiliations).map((item, index) => (
                  <span key={index} className={`text-xs border-[1px] rounded-md p-2 ${containsPesUniversity(item) ? 'bg-bluish-gray' : ''}`}>{truncateComma(item)}</span>
                ))}
              </div>
            </td>
          </tr>
          <tr className="h-2"></tr>
        </table>

        {/* <div className="flex border-t">
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
        </div> */}
      </>
    }>
      {children}
    </HtmlTooltip>
  );
}
