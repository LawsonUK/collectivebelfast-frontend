import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export const query = graphql`
  query TeacherQuery($slug: String!) {
    strapiTeacher(slug: { eq: $slug }) {
      strapiId
      name
      description
    }
  }
`

const Teacher = ({ data }) => {
  const teacher = data.strapiTeacher
  return (
    <Layout>
      <div className="content">
        <h1>{teacher.name}</h1>
        <div>
          <div>{teacher.description}</div>
        </div>
      </div>
    </Layout>
  )
}

export default Teacher
