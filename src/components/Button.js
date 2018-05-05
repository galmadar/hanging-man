import React from 'react';

export function Button(props) {
  return (
    <div className="button" onClick={props.onClick ? props.onClick : null}>
      {props.children}
    </div>
  )
}