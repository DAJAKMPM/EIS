import React, {useState} from "react";
import {Container, CssBaseline} from "@material-ui/core";
import {HeaderProps} from "../screen-parts/header/types";
import {FullWindowLayoutProps} from "./types";
import {useStyles} from "./styles";
import {SidebarProps} from "../screen-parts/sidebar/types";
import Sidebar from "../screen-parts/sidebar";
import Header from "../screen-parts/header";

const FullWindowLayout: React.FC<FullWindowLayoutProps> = ({
  children,
  headerTitle,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const headerProps: HeaderProps = {
    open,
    setOpen,
    headerTitle,
  };

  const sidebarProps: SidebarProps = {
    open,
    setOpen,
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header {...headerProps} />
      <Sidebar {...sidebarProps} />
      <main className={classes.content}>
        <Container maxWidth="lg">
          <div className={classes.toolbar} />
          {children}
        </Container>
      </main>
    </div>
  );
};

export default React.memo(FullWindowLayout);
