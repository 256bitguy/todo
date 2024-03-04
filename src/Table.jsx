import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Addtask from './components/task/Addtask';
import { TaskContext } from './Context';
import Techused from './components/techused/Techused';

const columns = [
  { field: 'id', headerName: 'Sno', width: 100 },
  { field: 'Task', headerName: <Addtask />, flex: 1 },
  { field: 'start', headerName: 'Start Date', sortable: false, type: 'number', flex: 1 },
  { field: 'end', headerName: 'End Date', type: 'number', sortable: false, flex: 1 },
  { field: 'status', headerName: 'Status', sortable: false, flex: 1 },
  { field: 'Tech', headerName: 'Tech Used', flex: 1 },
  { field: 'Tech', headerName: 'Tech Used', flex: 1 },
];

const DataTable = () => {
  const { list } = React.useContext(TaskContext);

  return (
    <div style={{ height: '80vh', width: '100%', overflowX: 'auto' }}>
      <DataGrid
        rows={list}
        columns={columns}
        autoHeight
        // Add other DataGrid props as needed
      />
    </div>
  );
};

export default DataTable;
