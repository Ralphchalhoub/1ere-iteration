import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import shoes from "assets/img/shoes1.jpeg";
import boots from "assets/img/boots.jpeg";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(item, color, description, price) {
  return { item, color, description, price };
}

const rows = [createData("whiteshirt", "white", "", 159)];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <img src={shoes} alt="..." />
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>shirts</StyledTableCell>
            <StyledTableCell align="right">item</StyledTableCell>
            <StyledTableCell align="right">color</StyledTableCell>
            <StyledTableCell align="right">comments</StyledTableCell>
            <StyledTableCell align="right">price&nbsp;($)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.item}</StyledTableCell>
              <StyledTableCell align="right">{row.color}</StyledTableCell>
              <StyledTableCell align="right">{row.description}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <img src={boots} alt="..." />
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>shirts</StyledTableCell>
            <StyledTableCell align="right">item</StyledTableCell>
            <StyledTableCell align="right">color</StyledTableCell>
            <StyledTableCell align="right">comments</StyledTableCell>
            <StyledTableCell align="right">price&nbsp;($)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.item}</StyledTableCell>
              <StyledTableCell align="right">{row.color}</StyledTableCell>
              <StyledTableCell align="right">{row.description}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
