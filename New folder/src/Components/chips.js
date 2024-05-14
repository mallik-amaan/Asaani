import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ClickableChips({label,onClick,variant,onDelete,color,size}) {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label={label} onClick={onClick} variant={variant} onDelete={onDelete} color={color} size={size}/>
    </Stack>
  );
}
