import React from "react";
import MUIDataTable from "mui-datatables";
import {MUIDataTableOptions} from "mui-datatables";
import AddBoxIcon from "@material-ui/icons/AddBox";
import {Button} from "@material-ui/core";
import {useStyles} from "../styles";

const Search: React.FC = () => {
  const classes = useStyles();

  const columns = [
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "gender",
      label: "Gender",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "birthPlace",
      label: "Birth Place",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "religion",
      label: "Religion",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "nationality",
      label: "Nationality",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "marital",
      label: "Marital",
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  const data = [
    {
      name: "Naruto1 Uzumaki",
      gender: "Male",
      birthPlace: "Konoha Village",
      religion: "Catholic",
      nationality: "Japanese",
      marital: "Single",
    },
    {
      name: "Naruto2 Uzumaki",
      gender: "Male",
      birthPlace: "Konoha Village",
      religion: "Catholic",
      nationality: "Japanese",
      marital: "Single",
    },
    {
      name: "Naruto3 Uzumaki",
      gender: "Male",
      birthPlace: "Konoha Village",
      religion: "Catholic",
      nationality: "Japanese",
      marital: "Single",
    },
    {
      name: "Naruto4 Uzumaki",
      gender: "Male",
      birthPlace: "Konoha Village",
      religion: "Catholic",
      nationality: "Japanese",
      marital: "Single",
    },
    {
      name: "Naruto5 Uzumaki",
      gender: "Male",
      birthPlace: "Konoha Village",
      religion: "Catholic",
      nationality: "Japanese",
      marital: "Single",
    },
    {
      name: "Naruto6 Uzumaki",
      gender: "Male",
      birthPlace: "Konoha Village",
      religion: "Catholic",
      nationality: "Japanese",
      marital: "Single",
    },
    {
      name: "Naruto7 Uzumaki",
      gender: "Male",
      birthPlace: "Konoha Village",
      religion: "Catholic",
      nationality: "Japanese",
      marital: "Single",
    },
    {
      name: "Naruto8 Uzumaki",
      gender: "Male",
      birthPlace: "Konoha Village",
      religion: "Catholic",
      nationality: "Japanese",
      marital: "Single",
    },
    {
      name: "Naruto9 Uzumaki",
      gender: "Male",
      birthPlace: "Konoha Village",
      religion: "Catholic",
      nationality: "Japanese",
      marital: "Single",
    },
    {
      name: "Naruto10 Uzumaki",
      gender: "Male",
      birthPlace: "Konoha Village",
      religion: "Catholic",
      nationality: "Japanese",
      marital: "Single",
    },
    {
      name: "Naruto11 Uzumaki",
      gender: "Male",
      birthPlace: "Konoha Village",
      religion: "Catholic",
      nationality: "Japanese",
      marital: "Single",
    },
    {
      name: "Naruto12 Uzumaki",
      gender: "Male",
      birthPlace: "Konoha Village",
      religion: "Catholic",
      nationality: "Japanese",
      marital: "Single",
    },
    {
      name: "Naruto13 Uzumaki",
      gender: "Male",
      birthPlace: "Konoha Village",
      religion: "Catholic",
      nationality: "Japanese",
      marital: "Single",
    },
    {
      name: "Naruto14 Uzumaki",
      gender: "Male",
      birthPlace: "Konoha Village",
      religion: "Catholic",
      nationality: "Japanese",
      marital: "Single",
    },
    {
      name: "Naruto15 Uzumaki",
      gender: "Male",
      birthPlace: "Konoha Village",
      religion: "Catholic",
      nationality: "Japanese",
      marital: "Single",
    },
    {
      name: "Naruto16 Uzumaki",
      gender: "Male",
      birthPlace: "Konoha Village",
      religion: "Catholic",
      nationality: "Japanese",
      marital: "Single",
    },
  ];

  const addButton = (): React.ReactNode => (
    <Button onClick={() => console.log("GG")}>
      <AddBoxIcon className={classes.addIcon} />
    </Button>
  );

  const options: MUIDataTableOptions = {
    filterType: "checkbox",
    customToolbar: addButton,
  };

  return (
    <MUIDataTable
      options={options}
      title={"Employee List"}
      data={data}
      columns={columns}
    />
  );
};

export default Search;
