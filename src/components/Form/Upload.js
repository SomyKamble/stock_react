import React, { Component } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
// import Grid from "@material-ui/core/Grid";
// import classes2 from "./Login.module.css";
import { AttachFile, Description, PictureAsPdf, Theaters } from '@material-ui/icons';
import { Upload } from "antd";
import { DropzoneAreaBase } from "material-ui-dropzone";
import { ExcelRenderer } from "react-excel-renderer";
// import { getDroppedOrSelectedFiles } from "html5-file-selector";
// import Dropzone from "react-dropzone";
// import DropZone from "./dropzone/DropZone";
import { Link as Links } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import TablePage from "./FormTab";
// import cssstyle from "./Form.module.css";
// import TransitionsModal from "./Modal";
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
// import { Table, Button, Row, Col, Upload } from "antd";
import { Button as Buttons } from "@material-ui/core";
import classes2 from "./Form.module.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Custombutton from "../Button/Custombutton";
import { Alert } from "@material-ui/lab";
import {
  createMuiTheme,
  MuiThemeProvider,
  ThemeProvider,
} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Clock from "react-digital-clock";
import Toolbar from "@material-ui/core/Toolbar";
import clsx from "clsx";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import { lighten } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = (theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#141629",
    paddingLeft: "65px",
    paddingRight: "65px",
    paddingTop: "0px",
    paddingBottom: "20px",
  },

  containerWidth: {
    maxWidth: "1850px",
    marginTop: "0px",
  },

  title: {
    flex: "1 1 100%",
    fontSize: "20px",
  },

  endIcon: {
    marginTop: "30px",
    marginLeft: "560px",
    marginRight: "",
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

  lineStyle: {
    "&:hover": {
      borderBottom: "#44947",
    },
  },

  drop: {
    color: "#bdbbbb",
    backgroundColor: "#141629",
    marginTop: "76px",
  },
  btn: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: "18",
    borderColor: "#225b54",
    backgroundColor: "#302c3c",
    "&:hover": {
      borderColor: "#225b54",
      backgroundColor: "#302c3c",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      borderColor: "#225b54",
      backgroundColor: "#302c3c",
    },
  },

  containerr: {
    maxHeight: 590,
    height: 530,
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
  // lineStyle: {
  //   "&:hover": {
  //     borderBottom: "#44947",
  //   },
  // },
});

class ExcelPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cols: [],
      rows: [],
      files: [],
      data: "NO",
      error: [],
      name: "",
      delete:"",
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
        let newerror = [];
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
            } else {
              if (!row[0] && !row[3]) {
                console.log("heree");
                newerror.push(
                  "Incomplete Data at ticker and price" + index + "row"
                );
              } else if (row[0] && !row[3]) {
                newerror.push("Incomplete Data at price  of" + index + "row");
              } else if (!row[0] && row[3]) {
                newerror.push("Incomplete Data at ticker  of" + index + "row");
              }
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
            error: newerror,
            errorMessage: null,
          });
        }
      }
    });
    return false;
  };

  storename(e) {
    this.setState({ name: e.target.value });
    console.log("here" + this.state.name);
  }
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
        MuiInputBase: {
          root: {
            color: "#449474",
          },
        },
        MuiInput: {
          underline: {
            "&:before": {
              borderBottom: `1px solid #449474`,
            },
            "&:hover": {
              borderBottom: `2px solid #449474`,
            },
          },
          placeholder: {
            opacity: "1px",
          },
        },
        MuiDropzoneArea: {
          root: {
            minHeight: "184px",
          },
        },
      },
    });

    const headCells = [
      { id: "ticker", numeric: true, disablePadding: false, label: "TICKER" },
      {
        id: "shortname",
        numeric: true,
        disablePadding: false,
        label: "SECURITY NAME",
      },
      {
        id: "quantity",
        numeric: true,
        disablePadding: false,
        label: "QUANTITY",
      },
      {
        id: "price",
        numeric: true,
        disablePadding: false,
        label: "COST",
      },
    ];

    function EnhancedTableHead() {
      // const { classes } = props;
      const classes = useStyles();

      return (
        <TableHead>
          <TableRow hover className={classes.firstRow}>
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
                <TableSortLabel>{headCell.label}</TableSortLabel>
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

    const useToolbarStyles = makeStyles((theme) => ({
      root: {
        paddingLeft: theme.spacing(0),
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

    function returnerror(error, data, name) {
      console.log("error here:" + error);
      if (data === "YES") {
        return (
          <>
            <div style={{ display: "flex" }}>
              <div style={{ marginLeft: "90px" }}>
                <TextField
                  id="outlined-bare"
                  className={classes.textField}
                  defaultValue={name}
                  margin="dense"
                  variant="outlined"
                />
              </div>
              <div
                style={{
                  width: 370,
                  height: 75,
                  whiteSpace: "nowrap",
                  marginLeft: "650px",
                }}
              >
                <Box
                  component="div"
                  my={2}
                  overflow="auto"
                  bgcolor="background.paper"
                >
                  <Alert
                    severity="error"
                    style={{ maxHeight: 75, overflow: "auto" }}
                  >
                    {error.map((er) => (
                      <li>{er}</li>
                    ))}
                  </Alert>
                </Box>
              </div>
            </div>
          </>
        );
      } else {
        return <></>;
      }
    }

    const check = (data) => {
      if (data === "YES") {
        return (
          <div>
            <div>
              {returnerror(this.state.error, this.state.data, this.state.name)}
            </div>
            <Container
              className={classes.containerWidth}
              style={{ maxWidth: "1450px", marginTop: "10px" }}
            >
              <div
                className={classes.root}
                
              >
                <Paper
                  className={classes.paper}
                
                >
                  <EnhancedTableToolbar />
                  <TableContainer
                    className={classes.containerr}
                    style={{ height: 360 }}
                  >
                    <Table
                      stickyHeader
                      className={classes.table}
                      style={{
                        minWidth: 750,
                        backgroundColor: "#141629",
                        color: "red",
                      }}
                    >
                      <EnhancedTableHead
                        classes={this.useStyles}
                        rowCount={this.state.rows.length}
                      />
                      <TableBody>
                        {this.state.rows.map((row, index) => {
                          return (
                            <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={row.key}
                            >
                              <TableCell
                                className={classes.tableCell}
                                align="left"
                                style={{ borderBottom: "none" }}
                              >
                                {/* {row.name} */}
                                <Custombutton
                                  bankName={row.name}
                                  dChange={false}
                                />
                              </TableCell>

                              <TableCell
                                className={classes.tableCell}
                                align="left"
                                style={{ borderBottom: "none" }}
                              >
                                {row.age}
                              </TableCell>

                              <TableCell
                                align="left"
                                className={classes.tableCell}
                                style={{ borderBottom: "none" }}
                              >
                                {row.gender}
                              </TableCell>

                              <TableCell
                                align="left"
                                className={classes.tableCell}
                                style={{ borderBottom: "none" }}
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
              
              <TableSubmitModal />
            </Container>
          </div>
        );
      } else {
        return <div></div>;
      }
    };

    const checkfordissaperingform = (data) => {
      const handlePreviewIcon = (fileObject, classes) => {
        const {type} = fileObject.file
        const iconProps = {
          className : classes.image,
        }
        if(!this.state.delete)
        {
          return <Description {...iconProps} />
        }
       else
       {
         return "";
       }

      }

      if (data === "NO") {
        return (
          <div>
            <Container className={classes.containerWidth} id="centerstyle">
              <div className={classes.root}>
                <Typography
                  className={classes.title}
                  variant="h5"
                  id="tableTitle"
                  component="div"
                >
                  FILL BELOW FORM
                </Typography>

                <ThemeProvider theme={theme}>
                  <form className={classes.textfield} noValidate>
                    <TextField
                      label="Enter Portfolio name"
                      variant="standard"
                      id="standard-search"
                      onChange={this.storename.bind(this)}
                      inputProps={{
                        style: {
                          fontSize: 11,
                          color: "#585c67",
                          marginBottom: "10px",
                        },
                      }}
                      InputLabelProps={{ className: classes2.text_field }}
                      className={classes.lineStyle}
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
                </ThemeProvider>

                <div>
                  <div style={{ marginTop: "25px" }}>
                    <DropzoneAreaBase
                      filesLimit={1}
                      acceptedFiles={['application/vnd.ms-excel','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']}
                      dropzoneClass={classes.drop}
                      Icon="disable"
                      showAlerts={false}
                     

  onAdd={newFileObjs => {
    console.log('onAdd', newFileObjs);
    this.setState({files:[].concat(this.state.files, newFileObjs)});
    
  }}
  fileObjects={this.state.files}
  onDelete={deleteFileObj => {
    console.log('onDelete', deleteFileObj);
    this.setState({ rows: [] ,delete:"YES"});
  }}
  onDrop={ this.fileHandler.bind(this)}
  getPreviewIcon={ handlePreviewIcon}
  
                      dropzoneText={
                        <>
                          <Upload
                          
                            accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                            name="file"
                            beforeUpload={this.fileHandler}
                            onRemove={() => this.setState({ rows: [] })}
                            multiple={false}
                            // component={Links} to="/showtable"
                          >
                            <Buttons
                            
                              className={classes.btn}
                              variant="outlined"
                              style={{ marginTop: "3%", background: "#302c3c" }}
                            >
                              Attach or drop file here
                            </Buttons>
                          </Upload>
                          <Typography
                            variant="body2"
                            style={{
                              marginTop: "2%",
                              color: "#86838B",
                              fontSize: "12px",
                            }}
                          >
                            Use the specified format to successfully submit the
                            file.
                            <br />
                            <i>
                              {" "}
                              <a
                                href="https://res.cloudinary.com/bryta/raw/upload/v1562751445/Sample_Excel_Sheet_muxx6s.xlsx"
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                style={{
                                  color: "#20A45C",
                                  textDecoration: "none",
                                }}
                              >
                                Click here
                              </a>{" "}
                            </i>{" "}
                            to download the sample file.
                          </Typography>
                        </>
                      }
                    >
                    </DropzoneAreaBase>
                  </div>
                </div>
                <div>
                  <div>
                    <TransitionsModal
                      rows={this.state.rows}
                      cols={columns}
                      errors={this.state.error}
                      parentCallback={this.handleCallback}
                      portfolio={this.state.name}
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
    };

   

    const { classes } = this.props;
    // function returnerror(error, data) {
    //   console.log("error here:" + error);
    //   if (data === "YES") {
    //     return (
    //       <div style={{ width: 200, whiteSpace: 'nowrap' }}>
    //         <Box component="div" my={2} overflow="auto" bgcolor="background.paper">
    //       <Alert severity="error" style={{maxHeight: 200, overflow: 'auto'}}>
    //         {error.map((er) => (
    //           <li>{er}</li>
    //         ))}
    //       </Alert>
    //       </Box>
    // </div>
    //     );
    //   } else {
    //     return <></>;
    //   }
    // }

    // function showname(data, name) {
    //   if (data === "YES") {
    //     // return <div>{name}</div>;
    //     return <><TextField
    //     id="outlined-bare"
    //     className={classes.textField}
    //     defaultValue={name}
    //     margin="normal"
    //     variant="outlined"
    //   /></>
    //   } else {
    //     return <></>;
    //   }
    // }

    return (
      <>
        {checkfordissaperingform(this.state.data)}
        {/* {showname(this.state.data, this.state.name)} */}

        {/* <div>{returnerror(this.state.error, this.state.data)}</div> */}
        {check(this.state.data)}
        {/* <div>
          <div style={{ marginTop: "25px" }}>
            <DropzoneAreaBase
              dropzoneClass={classes.drop}
              Icon="disable"
              showAlerts={false}
              // onAdd={()=>customMe()}
              // onChange={(files) => console.log('Files:', files)}
              dropzoneText={
                <>
                  <Upload
                    name="file"
                    beforeUpload={this.fileHandler}
                    onRemove={() => this.setState({ rows: [] })}
                    multiple={false}
                    // component={Links} to="/showtable"
                  >
                    <Buttons
                      className={classes.btn}
                      variant="outlined"
                      style={{ marginTop: "3%", background: "#302c3c" }}
                    >
                      Attach or drop file here
                    </Buttons>
                  </Upload>
                  <Typography
                    variant="body2"
                    style={{
                      marginTop: "2%",
                      color: "#86838B",
                      fontSize: "12px",
                    }}
                  >
                    Use the specified format to successfully submit the file.
                    <br />
                    <i>
                      {" "}
                      <a
                        href="https://res.cloudinary.com/bryta/raw/upload/v1562751445/Sample_Excel_Sheet_muxx6s.xlsx"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        style={{ color: "#20A45C", textDecoration: "none" }}
                      >
                        Click here
                      </a>{" "}
                    </i>{" "}
                    to download the sample file.
                  </Typography>
                </>
              }
            ></DropzoneAreaBase>
           
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
         
        </div> */}
        {/* {check(this.state.data)} */}
      </>
    );
  }
}

const useStyless = makeStyles((theme) => ({
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
  const classes = useStyless();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const returnstatement=(name)=> 
  {

  if(name)
  {
    var ans="This table have";
    ans=ans+props.rows.length;
    ans=ans+"rows and ";
    ans=ans+props.errors.length;
    ans=ans+"errors found based on matching tickers from database.";

return ans;
  }

  else
  {

return "Please fill portfolio Name And Then Submit";

  }
  
  }
  // const [isOpen, setIsOpen] = useState(false);
  // function toggleModal() {
  //   setIsOpen(!isOpen);
  // }

  return (
    <div style={{ padding: "0% 0% 0% 42%" }}>
      <button
        type="button"
        onClick={handleOpen}
        // onClick={() => { func1(); func2();}}
        style={{
          "min-height": "40px",
          width: "14vw",
          backgroundColor: "#20a45c",
          fontSize: "17px",
          fontWeight: "600",
          marginTop: "40px",
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
          <div
            className={classes.paper}
            style={{
              position: "fixed",
              width: "30%",
              height: "20%",
            }}
          >
            <p id="transition-modal-description">
              {returnstatement(props.portfolio)}
              {/* This table have {props.rows.length} rows and {props.errors.length} errors found based on
              matching tickers from database. */}
            </p>
            <div style={{ marginTop: 15 }}>
              <div className="actions">

<Buttons
type="button"
onClick={() => {
  if(props.portfolio)
  {
  props.parentCallback("YES");
  handleClose();
  }
  else
  {
    handleClose();
  }
}}
style={{
  "min-height": "40px",
  width: "40%",
  backgroundColor: "#449474",
  fontSize: "17px",
  fontWeight: "600",
  marginTop: 15,
  padding: "1px",
  borderRadius: "4px",
  color: "black",
  marginLeft: "30%",
}}
>
{ props.portfolio ? "OK" : "SUBMIT AGAIN" }

          </Buttons>  
            </div>
              </div>
            </div>
          </Fade>
             
      </Modal>
    </div>
  );
}

function TableSubmitModal(props) {
  const classes = useStyless();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const [isOpen, setIsOpen] = useState(false);
  // function toggleModal() {
  //   setIsOpen(!isOpen);
  // }
  const handleEntailmentRequest = (e) => {
    window.location.reload(false);
    console.log("aasdfad");
    //do something...
  };

  return (
    <div>
      {/* <button
        type="button"
        onClick={handleOpen}
        // onClick={() => { func1(); func2();}}
        style={{
          "min-height": "40px",
          width: "14vw",
          backgroundColor: "#20a45c",
          fontSize: "17px",
          fontWeight: "600",
          marginTop: "40px",
        }}
      >
        Submit
      </button> */}
      <Buttons
        style={{
          "min-height": "40px",
          width: "15%",
          backgroundColor: "#20a45c",
          fontSize: "17px",
          fontWeight: "600",
          marginTop: 0,
          borderRadius: "4px",
          color: "black",
          marginLeft: "850px",
        }}
        className="button"
        onClick={(e) => {
          handleEntailmentRequest(e);
        }}
      >
        CANCEL
      </Buttons>
      <span> &nbsp;&nbsp; </span>
      <Buttons
        type="button"
        onClick={handleOpen}
        style={{
          "min-height": "40px",
          width: "15%",
          backgroundColor: "#20a45c",
          fontSize: "17px",
          fontWeight: "600",
          marginTop: 0,
          padding: "1px",
          borderRadius: "4px",
          color: "black",
          marginLeft: "5px",
        }}
      >
        SUBMIT
      </Buttons>
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
          <div
            className={classes.paper}
            style={{
              position: "fixed",
              // background: "lightblue",
              width: "30%",
              height: "25%",
            }}
          >
            <h2 id="transition-modal-title">Alert</h2>
            <p id="transition-modal-description">ignore errors and submit?</p>
            <div style={{ marginTop: 20 }}>
              <div className="actions">
                <AlertSubmitModal />
                {/* <Buttons
                  onClick={(e) => {
                    handleEntailmentRequest(e);
                  }}
                  
                  type="button"
                
                  style={{
                    "min-height": "40px",
                    width: "50%",
                    backgroundColor: "#449474",
                    fontSize: "17px",
                    fontWeight: "600",
                    marginTop: 20,
                    padding: "1px",
                    borderRadius: "4px",
                    color: "black",
                  }}
                >
                  Re Upload
                </Buttons>
                <span> &nbsp;&nbsp; </span>
                <Buttons
                  style={{
                    "min-height": "40px",
                    width: "45%",
                    backgroundColor: "#449474",
                    fontSize: "17px",
                    fontWeight: "600",
                    marginTop: 20,
                    borderRadius: "4px",
                    color: "black",
                  }}
                  className="button"
                  onClick={() => {
                    handleClose();
                  }}
                >
                  Yes
                </Buttons> */}
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

function AlertSubmitModal(props) {
  const classes = useStyless();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const [isOpen, setIsOpen] = useState(false);
  // function toggleModal() {
  //   setIsOpen(!isOpen);
  // }
  const handleEntailmentRequest = (e) => {
    window.location.reload(false);
    console.log("aasdfad");
    //do something...
  };

  return (
    <div>
      {/* <button
        type="button"
        onClick={handleOpen}
        // onClick={() => { func1(); func2();}}
        style={{
          "min-height": "40px",
          width: "14vw",
          backgroundColor: "#20a45c",
          fontSize: "17px",
          fontWeight: "600",
          marginTop: "40px",
        }}
      >
        Submit
      </button> */}
      <Buttons
        onClick={(e) => {
          handleEntailmentRequest(e);
        }}
        // component={Links}
        // to="/form"
        type="button"
        // onClick={() => {}}
        // onClick={() => { func1(); func2();}}
        style={{
          "min-height": "40px",
          width: "50%",
          backgroundColor: "#449474",
          fontSize: "17px",
          fontWeight: "600",
          marginTop: 20,
          padding: "1px",
          borderRadius: "4px",
          color: "black",
        }}
      >
        Re Upload
      </Buttons>
      <span> &nbsp;&nbsp; </span>
      <Buttons
        style={{
          "min-height": "40px",
          width: "45%",
          backgroundColor: "#449474",
          fontSize: "17px",
          fontWeight: "600",
          marginTop: 20,
          borderRadius: "4px",
          color: "black",
        }}
        className="button"
        onClick={handleOpen}
      >
        Yes
      </Buttons>
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
          <div
            className={classes.paper}
            style={{
              position: "fixed",
              // background: "lightblue",
              width: "30%",
              height: "25%",
            }}
          >
            <h2 id="transition-modal-title">Success</h2>
            <p id="transition-modal-description">Completed !</p>
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
                <Buttons
                  onClick={(e) => {
                    handleEntailmentRequest(e);
                  }}
                  // component={Links}
                  // to="/form"
                  type="button"
                  // onClick={() => {}}
                  // onClick={() => { func1(); func2();}}
                  style={{
                    "min-height": "40px",
                    width: "40%",
                    backgroundColor: "#449474",
                    fontSize: "17px",
                    fontWeight: "600",
                    marginTop: 10,
                    padding: "1px",
                    borderRadius: "4px",
                    color: "black",
                    marginLeft: "30%",
                  }}
                >
                  OK
                </Buttons>
                {/* <span> &nbsp;&nbsp; </span>
                <Buttons
                  style={{
                    "min-height": "40px",
                    width: "45%",
                    backgroundColor: "#449474",
                    fontSize: "17px",
                    fontWeight: "600",
                    marginTop: 20,
                    borderRadius: "4px",
                    color: "black",
                  }}
                  className="button"
                  onClick={() => {
                    handleClose();
                  }}
                >
                  Yes
                </Buttons> */}
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default withStyles(useStyles)(ExcelPage);
