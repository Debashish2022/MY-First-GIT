import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

export default function Tooltiip(props) {
  return (
    <>
        {["top"].map((placement) => (
        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
            <Tooltip id={`tooltip-${placement}`}>
              <span
                style={{
                  color: "yellow"
                }}
              >
                {props.message}
              </span>
            </Tooltip>
          }
        >
          <span>
            {props.event}
        </span>
        </OverlayTrigger>
      ))}
    </>
  )
}
