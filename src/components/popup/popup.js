import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { useState } from 'react';
import s from '../popup/popup.module.css';

const Popup = ({ mockData }) => {
  const [popupData, setPopupData] = useState(mockData);
  const [popupNumber, setPopupNumber] = useState('');
  const [popupDate, setPopupDate] = useState(date());
  const [popupUserName, setPopupUserName] = useState('defaultUser');
  const [popupComment, setPopupComment] = useState('');

  function date() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    return `${day}.0${month + 1}.${year}`;
  }

  const resetInputs = () => {
    setPopupNumber('');
    setPopupDate(date());
    setPopupUserName('defaultUser');
    setPopupComment('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = document.getElementById('signup');

    const popupNumber = form.elements['popupNumber'].value;
    const popupDate = form.elements['popupDate'].value;
    const popupUserName = form.elements['popupUserName'].value;
    const popupComment = form.elements['popupComment'].value;

    if (popupNumber.trim() && popupDate.trim() && popupUserName.trim() && popupComment.trim()) {
      setPopupData([...popupData, { popupNumber, popupDate, popupUserName, popupComment }]);
      console.log(
        `{\n  popupNumber: ${popupNumber}, \n  popupDate: ${popupDate}, \n  popupUserName: ${popupUserName}, \n  popupComment: ${popupComment},\n}`,
      );
      resetInputs();
    } else {
      alert('add value and comment');
    }
  };

  return (
    <div className={`${s.modal} ${s.active}`}>
      <div className={`${s.modal__content} ${s.active}`}>
        {
          <form id="signup" style={{ display: 'flex', alignItems: 'flex-end' }}>
            <TableContainer>
              <Table sx={{ border: 1 }} aria-label="simple table">
                <TableHead sx={{ border: 1 }}>
                  <TableRow sx={{ border: 1 }}>
                    <TableCell sx={{ border: 1 }} rowSpan={2} align="center">
                      value
                    </TableCell>
                    <TableCell sx={{ border: 1 }} rowSpan={2} align="center">
                      date
                    </TableCell>
                    <TableCell sx={{ border: 1 }} rowSpan={2} align="center">
                      user
                    </TableCell>
                    <TableCell sx={{ border: 1 }} rowSpan={2} align="center">
                      comment
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {popupData.map(el => {
                    return (
                      <TableRow key={Math.random()} sx={{ border: 1 }}>
                        {Object.values(el).map(value => {
                          return (
                            <TableCell key={Math.random()} sx={{ border: 1 }} align="center">
                              {value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                  <TableRow sx={{ border: 1 }}>
                    <TableCell sx={{ border: 1 }} align="center">
                      <input
                        type="number"
                        name="popupNumber"
                        min="0"
                        value={popupNumber}
                        onChange={e => {
                          setPopupNumber(e.target.value);
                        }}
                      />
                    </TableCell>
                    <TableCell sx={{ border: 1 }} align="center">
                      <input
                        className={s.readonlyInput}
                        type="text"
                        name="popupDate"
                        defaultValue={popupDate}
                        readOnly
                      />
                    </TableCell>
                    <TableCell sx={{ border: 1 }} align="center">
                      <input
                        className={s.readonlyInput}
                        type="text"
                        name="popupUserName"
                        defaultValue={popupUserName}
                        readOnly
                      />
                    </TableCell>
                    <TableCell sx={{ border: 1 }} align="center">
                      <input
                        type="text"
                        name="popupComment"
                        value={popupComment}
                        onChange={e => {
                          setPopupComment(e.target.value);
                        }}
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <div>
              <input onClick={handleSubmit} type="submit" value="Add" />
              <input
                type="button"
                value="Close"
                onClick={() => {
                  window.open(window.location.href, '_self').close();
                }}
              />
            </div>
          </form>
        }
      </div>
    </div>
  );
};

export default Popup;
