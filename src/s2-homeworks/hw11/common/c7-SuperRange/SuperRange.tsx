import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: '#00cc21',
                width: "20%",
                '& .MuiSlider-thumb': {
                    height: 19,
                    width: 19,
                    backgroundColor: '#00cc21',
                    border: '6px solid white',
                    outline: "1px solid #00cc21",
                    '&:before': {
                      display: 'none',
                    },
                  },
                "& .MuiSlider-rail": {
                    backgroundColor: "#8B8B8B",
                    border: "none",
                }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
