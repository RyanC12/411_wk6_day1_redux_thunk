import React from 'react'
import Button from "@material-ui/core/Button"
import Table from "@material-ui/core/Table"
import TableHead from "@material-ui/core/TableHead"
import TableBody from "@material-ui/core/TableBody"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import Container from '@material-ui/coreContainer'
import { MoreVert } from '@material-ui/icons'
import DeleteIcon from '@material-ui/icons/Delete'


const Import = (props) => {
    // fill out this component

    return (
        <Container>
        <Button
            variant="contained"
            color="primary"
            onClick={props.fetchMakes}
        >
            Import
        </Button>
        <h2>{props.make.length}</h2>
        <Menu
        anchorE1={anchorE1}
        keepMounted
        open={Boolean(anchorE1)}
        onClose={handleClose}
        >

        </Menu>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Make</TableCell>
                    <MoreVert onClick={handleClose}>
                    <TableCell>Actions</TableCell>
                    

                    </MoreVert>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.makes.map((make, index) => (
                    <TableRow key={make.MakeId}>
                        <TableCell>{make.MakeId}</TableCell>
                        <TableCell>{make.MakeName}</TableCell>
                        <TableCell>
                            <DeleteIcon
                            onClick={
                                () => props.deleteMake(index)
                            }
                            >

                            </DeleteIcon>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </Container>
    )
}

export default Import