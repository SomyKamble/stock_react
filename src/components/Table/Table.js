import React , { useState, useEffect }  from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import MuiTableCell from "@material-ui/core/TableCell";
import Container from "@material-ui/core/Container";
import Custombutton from "../Button/Custombutton";
import Progressbar from "../Progressbar/Progressbar";
import styles from "./Table.module.css";
import Layout from "../Layout/Layout";
import firebaseConfig from './firebase.config';
import Firebase from "firebase";
import { w3cwebsocket as W3CWebSocket } from "websocket";





function createData(
  id,
  ticker,
  securityname,
  change,
  lastprice,
  weight,
  quantity,
  value,
  cost,
  totalreturn,
  ctr
) {
  return {
    id,
    ticker,
    securityname,
    change,
    lastprice,
    weight,
    quantity,
    value,
    cost,
    totalreturn,
    ctr,
  };
}
const TableCell = withStyles({
  root: {
    borderBottom: "none",
  },
})(MuiTableCell);
const secondHeader = [
  createData(50, 2005, 20, 5087, "80%", 734760, 36777, 55563, 5788, 80, 20),
];
var rows = [
  createData(
    1,
    <Custombutton bankName="Reliance" dChange={false} />,
    "Reliance Industries Limited",
    -1,
    25,
    <Progressbar position={20} />,
    738561,
    36777,
    36781,
    20,
    -20
  ),
  createData(
    2,
    <Custombutton bankName="TCS" dChange={true} />,
    "Tata Consultancy Services Limited",
    1,
    223,
    <Progressbar position={85} />,
    2953217,
    36777,
    36781,
    20,
    20
  ),
  createData(
    3,
    <Custombutton bankName="KOTAKBANK" dChange={false} />,
    "KOTAK MAHINDRA BANK",
    -1,
    222,
    <Progressbar position={50} />,
    492033,
    36777,
    36781,
    20,
    20
  ),
  createData(
    4,
    <Custombutton bankName="HDFC" dChange={false} />,
    "HDFC Bank Limited",
    -1,
    224,
    <Progressbar position={50} />,
    340481, 
    36777,
    36781,
    20,
    20
  ),
  createData(
    5,
    <Custombutton bankName="INFY" dChange={true} />,
    "Infosys Limited",
    1,
    22,
    <Progressbar position={50} />,
    408065,
    36777,
    36781,
    20,
    -20
  ),
  createData(
    6,
    <Custombutton bankName="HINDUNILVR" dChange={true} />,
    "Hindustan Unilever Limited",
    1,
    228,
    <Progressbar position={50} />,
    356865,
    36777,
    36781,
    20,
    -20
  ),
  createData(
    7,
    <Custombutton bankName="AXISBANK" dChange={true} />,
    "AXIS BANK",
    1,
    22,
    <Progressbar position={50} />,
    1510401,
    36777,
    36781,
    20,
    20
  ),
  createData(
    8,
    <Custombutton bankName="HDFC" dChange={false} />,
    "Housing Development Finance Corporation Limited",
    -1,
    22,
    <Progressbar position={50} />,
    633607, 
    36777,
    36781,
    20,
    -20
  ),
  createData(
    9,
    <Custombutton bankName="KOTAKBANK" dChange={true} />,
    "Kotak Mahindra Bank Limited",
    1,
    22,
    <Progressbar position={50} />,
    1195000, 
    36777,
    36781,
    20,
    20
  ),
  createData(
    10,
    <Custombutton bankName="ICICIBANK" dChange={true} />,
    "ICICI Bank Limited",
    1,
    22,
    <Progressbar position={50} />,
    1270529,
    36777,
    36781,
    20,
    20
  ),
  createData(
    11,
    <Custombutton bankName="BAJFINANCE" dChange={true} />,
    "Bajaj Finance Limited",
    1,
    22,
    <Progressbar position={50} />,
    81153, 
    36777,
    36781,
    20,
    20
  ),
  createData(
    12,
    <Custombutton bankName="SBIN" dChange={true} />,
    "State Bank of India",
    1,
    22,
    <Progressbar position={50} />,
    779521,
    36777,
    36781,
    20,
    20
  ),
  createData(
    13,
    <Custombutton bankName="ABBOTBANK" dChange={true} />,
    "ABBOT",
    1,
    22,
    <Progressbar position={50} />,
    1195009,
    36777,
    36781,
    20,
    20
  ),
  createData(
    14,
    <Custombutton bankName="BHARTIARTL" dChange={true} />,
    "Bharti Airtel Limited",
    22,
    22,
    <Progressbar position={50} />,
    2714625,
    36777,
    36781,
    20,
    20
  ),

  createData(
    15,
    <Custombutton bankName="HCLTECH" dChange={true} />,
    "HCL TECHNOLOGIES",
    22,
    22,
    <Progressbar position={50} />,
    1850625	,
    36777,
    36781,
    20,
    20
  ),
  createData(
    16,
    <Custombutton bankName="ASIANPAINT" dChange={true} />,
    "ASIAN PAINTS",
    22,
    22,
    <Progressbar position={50} />,
    60417,
    36777,
    36781,
    20,
    20
  ),
  createData(
    17,
    <Custombutton bankName="WIPRO" dChange={true} />,
    "WIPRO",
    22,
    22,
    <Progressbar position={50} />,
    969473,
    36777,
    36781,
    20,
    20
  ),
  createData(
    18,
    <Custombutton bankName="MARUTI" dChange={true} />,
    "MARUTI SUZUKI INDIA.",
    22,
    22,
    <Progressbar position={50} />,
    2815745,
    36777,
    36781,
    20,
    20
  ),
  createData(
    19,
    <Custombutton bankName="ULTRACEMCO" dChange={true} />,
    "ULTRATECH CEMENT",
    22,
    22,
    <Progressbar position={50} />,
    2952193,
    36777,
    36781,
    20,
    20
  ),
  createData(
    20,
    <Custombutton bankName="DMART" dChange={true} />,
    "AVENUE SUPERMARTS",
    22,
    22,
    <Progressbar position={50} />,
    5097729,
    36777,
    36781,
    20,
    20
  ),
  createData(
    21,
    <Custombutton bankName="ADANIGREEN" dChange={true} />,
    "ADANI GREEN ENERGY",
    22,
    22,
    <Progressbar position={50} />,
    912129,
    36777,
    36781,
    20,
    20
  ),
  createData(
    22,
    <Custombutton bankName="SUNPHARMA" dChange={true} />,
    "SUN PHARMACEUTICAL IND L",
    22,
    22,
    <Progressbar position={50} />,
    857857,
    36777,
    36781,
    20,
    20
  ),




];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  var array2 = array;
  const stabilizedThis = array2.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: "ticker", numeric: true, disablePadding: false, label: "TICKER" },
  {
    id: "securityname",
    numeric: true,
    disablePadding: false,
    label: "SECURITY NAME",
  },
  { id: "change", numeric: true, disablePadding: false, label: "%1D CHANGE" },
  {
    id: "lastprice",
    numeric: true,
    disablePadding: false,
    label: "LAST PRICE",
  },
  { id: "weight", numeric: true, disablePadding: false, label: "WEIGHT" },
  { id: "quantity", numeric: true, disablePadding: false, label: "QUANTITY" },
  { id: "value", numeric: true, disablePadding: false, label: "VALUE" },
  { id: "cost", numeric: true, disablePadding: true, label: "COST" },
  {
    id: "totalreturn",
    numeric: true,
    disablePadding: true,
    label: "TOTAL RETURN",
  },
  { id: "ctr", numeric: true, disablePadding: false, label: "CTR" },
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            style={{
              fontSize: "12px",
              fontWeight: "450",
              letterSpacing: "1px",
            }}
            align={"left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(0),
    backgroundColor: "#141629",
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
  filterIcon: {
    height: "31px",
    width: "31px",
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();

  return (
    <Toolbar className={clsx(classes.root)}>
      <Typography
        className={classes.title}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        SECURITY OVERVIEW
      </Typography>

      <Tooltip title="Filter list">
        <IconButton aria-label="filter list">
          <img
            src="https://res.cloudinary.com/de1v32nv0/image/upload/v1620350560/icons/filter-1634626_johksw.png"
            alt="filtericon"
            className={classes.filterIcon}
          />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#141629",
    paddingRight: theme.spacing(5),
  },

  containerr: {
    maxHeight: 590,
  },
  paginationColor: {
    backgroundColor: "#141629",
  },
  paper: {
    width: "100%",
  },
  table: {
    minWidth: 750,
    backgroundColor: "#141629",
    color: "red",
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  containerWidth: {
    maxWidth: "1450px",
  },
  tableCell: {
    color: "#94959D!important",
    fontSize: "13px",
    letterSpacing: "1px",
  },
  tableCellSticky: {
    color: "#94959D!important",
    backgroundColor: "#070A1B",
    fontSize: "13px",
    letterSpacing: "1px",
    position: "sticky",
    top: "56px",
    zIndex: "99999",
  },
  tableCellRed: {
    color: "#DA4F30",
    fontSize: "12px",
  },
  tableCellGreen: {
    color: "#21CE99",
    fontSize: "12px",
  },
  firstRow: {
    backgroundColor: "#070A1B",
  },
}));
// const client = new WebSocket('wss://ws.kite.trade?api_key=0yvny102khsjlnpr&access_token=EdL5jjXZ3lvHxIOFnNxUJAMZkAD3Y0iZ');
  
export default function EnhancedTable() {
  const classes = useStyles();
  const [stocks,setstocks]=useState(rows);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [page] = React.useState(0);
  const [id,setid] =useState(14);
  const [rowsPerPage] = React.useState(rows.length + 1);

  if (!Firebase.apps.length) {
    Firebase.initializeApp(firebaseConfig);
 }else {
    Firebase.app();
 }


const MINUTE_MS = 3000;

React.useEffect(() => {
  const interval = setInterval(() => {
    Firebase.database()
    .ref("stock_data")
    .once("value")
    .then(function (snapshot) {
       setTableData(snapshot.val());
    //    let userRef = Firebase.database().ref('customPath/' + userId);
    // userRef.remove();
    // console.log("dat_ddget:", snapshot.val());
      
    });

  }, MINUTE_MS);

  return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
}, [stocks]);

function setTableData(val)
{
  rows=stocks;
  setstocks([]);
  
  console.log("start");
 val.map((row)=>{
 
  rows.map((stock)=>{
   if(stock.quantity===row.instrument_token)
   {
     stock.change=row.change.toFixed(2);
     console.log("sec name :"+ stock.securityname + "    Change :" + stock.change + " Price :" + row.last_price);
     stock.lastprice=row.last_price;
     stock.value=(stock.lastprice*10).toFixed(2);
     stock.totalreturn=Math.abs(((stock.lastprice-stock.cost)*(stock.quantity))).toFixed(2);
     stock.ctr= stock.weight*stock.totalreturn;
   }
  

  });

  
});
 console.log("end");
 setstocks(rows);

}


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <>
      <Layout flag="dashboard" />
      <Container className={classes.containerWidth}>
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <EnhancedTableToolbar />
            <TableContainer className={classes.containerr}>
              <Table stickyHeader className={classes.table}>
                <EnhancedTableHead
                  classes={classes}
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                />
                <TableBody>
                  <TableRow
                    hover
                    role="checkbox"
                    className={classes.firstRow}
                    tabIndex={-1}
                  >
                    <TableCell
                      align="left"
                      className={`${classes.tableCellSticky} ${styles.paddingLeft}`}
                    >
                      {secondHeader[0].ticker}%
                    </TableCell>
                    <TableCell align="left" className={classes.tableCellSticky}>
                      {secondHeader[0].securityname}
                    </TableCell>
                    <TableCell align="left" className={classes.tableCellSticky}>
                      {secondHeader[0].change}
                    </TableCell>
                    <TableCell align="left" className={classes.tableCellSticky}>
                      {secondHeader[0].lastprice}
                    </TableCell>
                    <TableCell align="left" className={classes.tableCellSticky}>
                      {secondHeader[0].weight}%
                    </TableCell>
                    <TableCell align="left" className={classes.tableCellSticky}>
                      {secondHeader[0].quantity}
                    </TableCell>
                    <TableCell align="left" className={classes.tableCellSticky}>
                      ₹{secondHeader[0].value}
                    </TableCell>
                    <TableCell align="left" className={classes.tableCellSticky}>
                      ₹{secondHeader[0].cost}
                    </TableCell>
                    <TableCell align="left" className={classes.tableCellSticky}>
                      ₹{secondHeader[0].totalreturn}
                    </TableCell>
                    <TableCell align="left" className={classes.tableCellSticky}>
                      {secondHeader[0].ctr}%
                    </TableCell>
                  </TableRow>

                  {stableSort(stocks, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.id}
                        >
                          <TableCell className={classes.tableCell} align="left">
                            {row.ticker}
                          </TableCell>
                          <TableCell className={classes.tableCell} align="left">
                            {row.securityname}
                          </TableCell>
                          <TableCell
                            align="left"
                            className={
                              row.change < 1
                                ? classes.tableCellRed
                                : isNaN(row.ticker)
                                ? classes.tableCell
                                : ""
                            }
                          >
                            {row.change}%
                          </TableCell>
                          <TableCell align="left" className={classes.tableCell}>
                            ₹{row.lastprice}
                          </TableCell>
                          <TableCell align="left" className={classes.tableCell}>
                            {row.weight}
                          </TableCell>
                          <TableCell align="left" className={classes.tableCell}>
                            {numberWithCommas(row.quantity)}
                          </TableCell>
                          <TableCell align="left" className={classes.tableCell}>
                            ₹{numberWithCommas(row.value)}
                          </TableCell>
                          <TableCell align="left" className={classes.tableCell}>
                            ₹{numberWithCommas(row.cost)}
                          </TableCell>
                          <TableCell align="left" className={classes.tableCell}>
                            ₹{row.totalreturn}
                          </TableCell>
                          <TableCell
                            align="left"
                            className={
                              row.ctr < 0 && isNaN(row.ticker)
                                ? classes.tableCellRed
                                : !isNaN(row.ticker)
                                ? ""
                                : classes.tableCellGreen
                            }
                          >
                            {row.ctr}%
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
      </Container>
    </>
  );
}
