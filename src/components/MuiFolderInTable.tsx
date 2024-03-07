import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import FolderIcon from '@mui/icons-material/Folder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Chip from '@mui/material/Chip';

function createData(
  id: number,
  report: string,
  publishedOn: string,
  status: string,
  parentId?: number
) {
  return {
    id,
    report,
    publishedOn,
    status,
    parentId
  };
}

function Row(props: { row: any, rows: any[] }) {
    const { row, rows } = props;
    const [open, setOpen] = React.useState(false);
  
    const childFiles = rows.filter(r => r.parentId === row.id && r.report.startsWith("File"));
  
    return (
      <React.Fragment>
        <TableRow>
          <TableCell sx={{ width: '80px' }}>
            {childFiles.length > 0 && (
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            )}
            {!row.report.startsWith("File") && (
              <IconButton
                aria-label="folder icon"
                size="small"
              >
                <FolderIcon />
              </IconButton>
            )}
          </TableCell>
          <TableCell component="th" scope="row">
            {row.report}
          </TableCell>
          <TableCell align="right">{row.publishedOn}</TableCell>
          <TableCell align="right">
            <Chip label={row.status} color="primary" variant="outlined" />
          </TableCell>
        </TableRow>

        {open && (
          <>
            {childFiles.map((childRow) => (
              <TableRow key={childRow.id}>

                <TableCell sx={{ width: '20px', paddingLeft: '50px' }}>
                  <IconButton aria-label="more" size="small">
                    <MoreVertIcon />
                  </IconButton>
                </TableCell>

                <TableCell component="th" scope="row">
                  {childRow.report}
                </TableCell>
                <TableCell align="right">{childRow.publishedOn}</TableCell>
                <TableCell align="right">
                    <Chip label={childRow.status} color="primary" variant="outlined" />
                </TableCell>
                
                

              </TableRow>
            ))}
          </>
        )}
      </React.Fragment>
    );
}

const rows = [
  createData(1, 'Folder A', '12/14/2023 3:37 PM', 'New'),
  createData(2, 'File 1', '12/14/2023 3:37 PM', 'New', 1),
  createData(3, 'File 2', '12/14/2023 3:37 PM', 'New', 1),
  createData(4, 'Folder B', '12/14/2023 3:37 PM', 'New'),
  createData(5, 'File 3', '12/14/2023 3:37 PM', 'New', 4),
  createData(6, 'File 4', '12/14/2023 3:37 PM', 'New', 4),
];

const CollapsibleTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow sx={{ backgroundColor: '#eff6ea' }}>
            <TableCell />
            <TableCell>Report</TableCell>
            <TableCell align="right">Published on</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell></TableCell> {/* For the ellipsis icon column */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.filter(row => !row.report.startsWith("File")).map((row) => (
            <Row key={row.id} row={row} rows={rows} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CollapsibleTable;
