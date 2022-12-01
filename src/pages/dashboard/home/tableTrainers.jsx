import { useState } from "react";
import Paper from "@mui/material/Paper";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TablePagination,
} from "@mui/material";
import { MdCatchingPokemon } from "react-icons/md";
import { DialogDetails } from "./dialogDetails";

const columns = [
  { id: "id", label: "Id" },
  { id: "nombreCompleto", label: "Nombre" },
  {
    id: "pokemon1",
    label: "Pokemon 1",
  },
  {
    id: "pokemon2",
    label: "Pokemon 2",
  },
  {
    id: "pokemon3",
    label: "Pokemon 3",
  },
  {
    id: "detalleEquipo",
    label: "Detalle del Equipo",
  },
  {
    id: "action",
    label: "Ver",
  },
];

function createData(
  id,
  nombreCompleto,
  pokemon1,
  pokemon2,
  pokemon3,
  detalleEquipo
) {
  return { id, nombreCompleto, pokemon1, pokemon2, pokemon3, detalleEquipo };
}

const rows = [
  createData(
    1,
    "RODRIGO ALAGUNA MORENO",
    "Metapod",
    "Pikachu",
    "tortuga",
    "Des"
  ),
];

export const TableAdmin = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(Number(event.target.value));
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align="center">
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.nombreCompleto}</TableCell>
                <TableCell align="center">{row.pokemon1}</TableCell>
                <TableCell align="center">{row.pokemon2}</TableCell>
                <TableCell align="center">{row.pokemon3}</TableCell>
                <TableCell align="center">{row.detalleEquipo}</TableCell>
                <TableCell align="center">
                  <DialogDetails nameParticipante={row?.nombreCompleto} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[1, 2, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        SelectProps={{
          inputProps: {
            "aria-label": "Registros por página",
          },
          native: true,
        }}
        labelRowsPerPage="Registros por Página"
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
