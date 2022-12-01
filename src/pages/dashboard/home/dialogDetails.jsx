import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { MdCatchingPokemon } from "react-icons/md";

export const DialogDetails = ({ nameParticipante }) => {
  const [open, setOpen] = useState(false);
  let className = "animate__zoomIn";

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="error"
        startIcon={<MdCatchingPokemon />}
        onClick={handleClickOpen}
      ></Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle
          id="responsive-dialog-title"
          className={
            open
              ? "animate__animated animate__zoomIn"
              : "animate__animated animate__zoomOut"
          }
        >
          {nameParticipante}
        </DialogTitle>
      </Dialog>
    </div>
  );
};
