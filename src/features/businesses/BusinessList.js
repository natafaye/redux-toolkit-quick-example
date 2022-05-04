import React from 'react'
import { Link } from 'react-router-dom'

export default function BusinessList({businesses}) {
  return (
    <ul className="list-group">
      {businesses.map(business => (
        <li className="list-group-item" key={business.id}>
          <Link to={"/business/" + business.id}>{business.name}</Link>
        </li>
      ))}
    </ul>
  )
}
