'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

/**
 * 検索バー
 */
export const Searchbar = () => {
  const pathname = usePathname();

  // ログインページでは検索バーを非表示にする
  if (pathname === '/login' || pathname === '/signup') {
    return null;
  }

  return (  
    <TextField
      id="search-bar"
      variant="outlined"
      placeholder="タイトルを検索..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{
        width: '100%',
        '& .MuiOutlinedInput-root': {
          borderRadius: '20px',
        },
      }}
    />
  );
};
