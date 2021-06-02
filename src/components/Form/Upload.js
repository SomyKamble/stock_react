import React, { Component, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
// import classes2 from "./Login.module.css";
// import Table from "antd";
import {
  createMuiTheme,
  MuiThemeProvider,
  ThemeProvider,
} from "@material-ui/core";
import Clock from "react-digital-clock";
import {  Button, Row, Col, Upload } from "antd";
import { DropzoneAreaBase, DropzoneArea } from "material-ui-dropzone";
import { ExcelRenderer } from "react-excel-renderer";
// import { getDroppedOrSelectedFiles } from "html5-file-selector";
import Dropzone from "react-dropzone";
// import DropZone from "./dropzone/DropZone";
import { Link as Links } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import TablePage from "./FormTab";
import cssstyle from "./Form.module.css";
// import TransitionsModal from "./Modal";
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import classes2 from "./Form.module.css";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
// import { Table, Button, Row, Col, Upload } from "antd";

class ExcelPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cols: [],
      rows: [],
      files: [],
      data:"NO",
      errorMessage: null,
      columns: [
        {
          title: "TICKER",
          dataIndex: "name",
          editable: false,
        },
        {
          title: "SHORTNAME",
          dataIndex: "age",
          editable: false,
        },
        {
          title: "STOCKPRICE",
          dataIndex: "gender",
          editable: false,
        },
        {
          title: "QUANTITY",
          dataIndex: "age2",
          editable: false,
        },
      ],
    };
  }

  handleCallback = (childData) => {
    this.setState({ data: childData });
  };

  //   handleSave = (row) => {
  //     const newData = [...this.state.rows];
  //     const index = newData.findIndex((item) => row.key === item.key);
  //     const item = newData[index];
  //     newData.splice(index, 1, {
  //       ...item,
  //       ...row,
  //     });
  //     this.setState({ rows: newData });
  //   };

  // handleChange(files1){
  //   this.setState({
  //     files: files1
  //   });
  //   console.log('file',this.state.files);
  //   let fileObj = this.state.files;
  //   console.log('file',this.state.files.type);
  //   console.log("fileObj.type:", fileObj.type);
  // }

  //   checkFile(file) {
  //     let errorMessage = "";
  //     if (!file || !file[0]) {
  //       return;
  //     }
  //     const isExcel =
  //       file[0].type === "application/vnd.ms-excel" ||
  //       file[0].type ===
  //         "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
  //     if (!isExcel) {
  //       errorMessage = "You can only upload Excel file!";
  //     }
  //     console.log("file", file[0].type);
  //     const isLt2M = file[0].size / 1024 / 1024 < 2;
  //     if (!isLt2M) {
  //       errorMessage = "File must be smaller than 2MB!";
  //     }
  //     console.log("errorMessage", errorMessage);
  //     return errorMessage;
  //   }
  
  useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      backgroundColor: "#141629",
      paddingRight: theme.spacing(5),
    },
    
    textfield: {
      "& > *": {
        //   margin: theme.spacing(1),
        width: "30%",
        //   color:"green",
        marginTop: "40px",
        // borderColor: 'red'
      },
    },
    containerWidth: {
      maxWidth: "1850px",
      marginTop: "10px",
    },
  
    title: {
      flex: "1 1 100%",
    },
  
    endIcon: {
      marginTop: "30px",
      marginLeft: "560px",
      marginRight:""
      
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
   
    paginationColor: {
      backgroundColor: "#141629",
    },
  }));

  fileHandler = (FileList) => {
    console.log("fileListHere", FileList);
    let fileObj = FileList;
    if (!fileObj) {
      this.setState({
        errorMessage: "No file uploaded!",
      });
      return false;
    }
    console.log("fileObj.type:", fileObj.type);
    if (
      !(
        fileObj.type === "application/vnd.ms-excel" ||
        fileObj.type ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      )
    ) {
      this.setState({
        errorMessage: "Unknown file format. Only Excel files are uploaded!",
      });
      return false;
    }

    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        let newRows = [];
        resp.rows.slice(1).map((row, index) => {
          if (row && row !== "undefined") {
            if (row[0] && row[3]) {
              newRows.push({
                key: index,
                name: row[0],
                age: row[1],
                gender: row[2],
                age2: row[3],
              });
            }
          }
        });
        if (newRows.length === 0) {
          this.setState({
            errorMessage: "No data found in file!",
          });
          return false;
        } else {
          this.setState({
            cols: resp.cols,
            rows: newRows,
            errorMessage: null,
          });
        }
      }
    });
    return false;
  };

  render() {
    const columns = this.state.columns.map((col) => {
      return col;
    });



    const color = "#008000";
const theme = createMuiTheme({
  palette: {
    common: { black: color, white: color },
    primary: {
      main: "#bdbbbb",
      contrastText: "#ffffff",
    },
    text: { primary: color, secondary: color },
  },
  overrides: {
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: `1px solid ${color}`,
        },
      },
    },
  },
});

const themess = createMuiTheme({
  overrides: {
    MuiDropzoneSnackbar: {
      errorAlert: {
        backgroundColor: "#AFA",
        color: "#000",
      },
      successAlert: {
        backgroundColor: "#FAA",
        color: "#000",
      },
    },
  },
});

const themes = createMuiTheme({
  palette: {
      primary: {
          main: "#438c3f",
          contrastText: "#000000",
      },
      secondary: {
          main: "#438c3f",
          contrastText: "#000000",
      },
  },
});

    const headCells = [
      { id: "ticker", numeric: true, disablePadding: false, label: "TICKER" },
      {
        id: "shortname",
        numeric: true,
        disablePadding: false,
        label: "SHORTNAME",
      },
      { id: "quantity", numeric: true, disablePadding: false, label: "QUANTITY" },
      {
        id: "price",
        numeric: true,
        disablePadding: false,
        label: "PRICE",
      }
    ];


   function EnhancedTableHead(props) {
      const { classes} = props;
      
      return (
        <TableHead>
          <TableRow  
            hover
            className={classes.firstRow}
          >
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
               
              >
                <TableSortLabel
                >
                  {headCell.label}
                  
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
      );
    }
    
    EnhancedTableHead.propTypes = {
      classes: PropTypes.object.isRequired,
      rowCount: PropTypes.number.isRequired,
    };
  

    const check = (data) => {
     
      if (data === "YES") {
        return (
          <div>
         
      <Container className={this.useStyles.containerWidth}>
        <div className={this.useStyles.root}>
          <Paper className={this.useStyles.paper}>
<TableContainer className={this.useStyles.containerr}>
              <Table stickyHeader className={this.useStyles.table}>
                <EnhancedTableHead

                  classes={this.useStyles}
                  rowCount={this.state.rows.length}
                />
                <TableBody>
                  

                  {this.state.rows
                    .map((row, index) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.key}
                        >
                          <TableCell className={this.useStyles.tableCell} align="left">
                            {row.name}
                          </TableCell>

                          <TableCell className={this.useStyles.tableCell} align="left">
                            {row.age}
                          </TableCell>
                         
                        
                          <TableCell align="left" className={this.useStyles.tableCell}>
                            {row.gender}
                          </TableCell>
                         
                          <TableCell align="left"
                           className={this.useStyles.tableCell}
                         
                         >
                            {row.age2}
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
      </div>
          // <div style={{ marginTop: 20,width: "50%" }}>
          //   <Table dataSource={this.state.rows} columns={columns} />
          // </div>
        );


      } else {
        return <div></div>;
      }
    };

    const checkfordissaperingform=(data)=>
    {
      if (data === "NO") {
        return (
          <div>
             <Container className={this.useStyles.containerWidth}>
       <div className={this.useStyles.root}>
         <Typography
          className={this.useStyles.title}
          variant="h5"
          id="tableTitle"
          component="div"
        >
          FILL BELOW FORM
        </Typography>

        <ThemeProvider theme={theme}> 
          <Grid container className={this.useStyles.textfield}>
            <Grid item>
          <form className={this.useStyles.textfield} noValidate>
            <TextField
              // className={classe.placeholder}
              label="Enter Dashboard Name"
              variant="standard"
              id="standard-search"
              inputProps={{ style: { fontSize: 13, color: "white" } }}
              InputLabelProps={{ className: classes2.text_field }}
            />
            <span>&nbsp;&nbsp;&nbsp;&nbsp; </span>
            <Button
              variant="outlined"
              color="primary"
              style={{ "min-height": "45px", width: "15%" }}
            >
              <Clock hour12={false} /> IST
            </Button>
          </form>
          </Grid>
            <Grid item alignItems="stretch" style={{ display: "flex" }}>
          <Button variant="outlined" color="primary">
                CONTINUE
              </Button>
          </Grid>
          </Grid> 
         </ThemeProvider>
        
          <div>
          <div>
          







            <Upload
              name="file"
              beforeUpload={this.fileHandler}
              onRemove={() => this.setState({ rows: [] })}
              multiple={false}
            
            >
              <Button
              
                variant="contained"
                color="primary"
                style={{
                  "min-height": "40px",
                  width: "30%",
                  backgroundColor: "green",
                  fontSize: "17px",
                  fontWeight: "600",
                }}
              >
                Attach File here
              
              </Button>
              <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
              <a
                href="https://res.cloudinary.com/bryta/raw/upload/v1562751445/Sample_Excel_Sheet_muxx6s.xlsx"
                target="_blank"
                rel="noopener noreferrer"
                download
                style={{ color: "green" }}
              >
                Sample excel sheet
              </a>
            </Upload>
          </div>

        </div>
        <div>
          <div>
            <TransitionsModal
              rows={this.state.rows}
              cols={columns}
              parentCallback={this.handleCallback}
            />
          </div>
       
        </div>
        </div>
        </Container>
        </div>
       
        );
      } else {
        return <div></div>;
      }
    }
    const { data } = this.state;

    return (
      <>
     {checkfordissaperingform(this.state.data)}

        {check(this.state.data)}
      </>
    );
  }
}

const useStyles1 = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function TransitionsModal(props) {
  const classes = useStyles1();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleOpen}
        // onClick={() => { func1(); func2();}}
        style={{
          "min-height": "40px",
          width: "30%",
          backgroundColor: "green",
          fontSize: "17px",
          fontWeight: "600",
          marginTop: 20,
        }}
      >
        Submit
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">INFO ABOUT ROWS AND COLS</h2>
            <p id="transition-modal-description">
              This table have {props.rows.length} Rows. Do you want to accept?
            </p>
            <div style={{ marginTop: 20 }}>
              <div className="actions">
                {/* <button
                  onClick={() => {
                    props.parentCallback("YES");
                    handleClose();
                    // close();
                  }}
                  className="button"
                >
                  CREATE Table{" "}
                </button> */}
                <button
                  type="button"
                  onClick={() => {
                    props.parentCallback("YES");
                    handleClose();
                    // close();
                  }}
                  // onClick={() => { func1(); func2();}}
                  style={{
                    "min-height": "40px",
                    width: "50%",
                    backgroundColor: "green",
                    fontSize: "17px",
                    fontWeight: "600",
                    marginTop: 20,
                  }}
                >
                  Show Table
                </button>

                <button
                  style={{
                    "min-height": "40px",
                    width: "50%",
                    backgroundColor: "green",
                    fontSize: "17px",
                    fontWeight: "600",
                    marginTop: 20,
                  }}
                  className="button"
                  onClick={() => {
                    console.log("modal closed ");
                    props.parentCallback("NO");
                    handleClose();
                    // close();
                  }}
                >
                  Cancel
                </button>
              </div>
              {/* <Table dataSource={props.dataSource} columns={props.columns} />
              <button
                type="button"
                onClick={""}
                style={{
                  "min-height": "40px",
                  width: "45%",
                  backgroundColor: "green",
                  fontSize: "17px",
                  fontWeight: "600",
                  marginTop: 20,
                }}
              >
                Submit
              </button> */}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ExcelPage;
