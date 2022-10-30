import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material"


export const ParamItem = ({param}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200  }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dispositivo</TableCell>
            <TableCell align="right">Fecha</TableCell>
            <TableCell align="right">Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {param.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.fecha}</TableCell>
              <TableCell align="right">{row.valor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
