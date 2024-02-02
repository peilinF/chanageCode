import React from 'react';

const DialogBox = () => {
  const dialogStyle = {
    background: '#FFFFFF',
    borderRadius: '16px',
    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)',
    padding: '32px',
    width: '480px',
    margin: '100px auto',
    position: 'relative',
    fontFamily: 'Arial, sans-serif',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
  };

  const transferSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '24px',
  };

  const inputBoxStyle = {
    background: '#F2F2F2',
    border: '1px solid #E6E6E6',
    borderRadius: '8px',
    padding: '10px 16px',
    flex: '1',
    marginRight: '8px',
  };

  const arrowStyle = {
    margin: '0 16px',
    color: '#000',
    fontSize: '18px',
  };

  const buttonGroupStyle = {
    display: 'flex',
    justifyContent: 'flex-end', 
    gap: '10px',
    marginBottom: '24px',
  };

  const actionButtonStyle = {
    padding: '16px 32px',
    border: 'none',
    borderRadius: '24px',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%',
    marginTop: '8px',
  };

  const fractionButtonStyle = {
    background: '#E6E6E6',
    border: 'none',
    borderRadius: '8px',
    padding: '10px 0', 
    cursor: 'pointer',
    fontWeight: 'bold',
    textAlign: 'center', 
    fontSize: '14px', 
    minWidth: '50px', 
  };

  const transferButtonStyle = {
    ...actionButtonStyle,
    background: '#000000',
    color: '#FFFFFF',
    marginBottom: '8px',
  };

  const cancelButtonStyle = {
    ...actionButtonStyle,
    background: '#E0E0E0',
    color: '#000',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '24px',
    right: '24px',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const timeStyle = {
    fontSize: '14px',
    marginBottom: '24px',
    color: '#333333', 
    display: 'flex', 
    justifyContent: 'flex-end', 
    padding: '8px 16px', 
    background: '#E0E0E0', 
    borderRadius: '8px',
    width: 'fit-content', 
    alignSelf: 'flex-end', 
  };

  return (
    <div style={dialogStyle}>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Deposit ATOM</h2>
        <button style={closeButtonStyle}>×</button>
      </div>
      
      <div style={transferSectionStyle}>
        <div style={{ flex: '1' }}>
          <div style={{ marginBottom: '8px' }}>From Cosmos Hub</div>
          <input style={inputBoxStyle} placeholder="atom1xy5y...m6wwz9a" />
        </div>
        <span style={arrowStyle}>→</span>
        <div style={{ flex: '1' }}>
          <div style={{ marginBottom: '8px' }}>To Osmosis</div>
          <input style={inputBoxStyle} placeholder="osmo1xy5y...w9a" />
        </div>
      </div>

      <div style={buttonGroupStyle}>
        <button style={{...fractionButtonStyle, marginRight: '10px'}}>Max</button>
        <button style={fractionButtonStyle}>1/2</button>
        <button style={fractionButtonStyle}>1/3</button>
      </div>

      <div style={timeStyle}>Estimated time: 20 seconds</div>

      <button style={transferButtonStyle}>Transfer</button>
      <button style={cancelButtonStyle}>Cancel</button>
    </div>
  );
};

export default DialogBox;
