import React from 'react'
import { withRouteData, Link } from 'react-static'
import { GridCell } from 'rmwc/Grid'
import {
  Card,
  CardSupportingText,
  CardPrimary,
  CardTitle,
  CardSubtitle,
  CardActions,
} from 'rmwc/Card'
import { Typography } from 'rmwc/Typography'
//

let path = '/post/00'
let returnUri = '/blog/'

export default withRouteData(({ post }) => (
  <GridCell span="12">
    <Card>
      <CardPrimary>
        <CardActions>
          <Link tag="a" className="mdc-button mdc-button--stroked mdc-theme--primary mdc-ripple-upgraded" to={returnUri}>{'<'} Back</Link>
        </CardActions>
        <CardTitle large><Typography style={{ textAlign: 'center' }} use="display2">{post.volumeInfo.title}</Typography></CardTitle>
        <CardSubtitle />
      </CardPrimary>
      <CardSupportingText>
        <h2>{post.volumeInfo.authors[0]}</h2>
        <p>{post.volumeInfo.description}</p>
      </CardSupportingText>
    </Card>
  </GridCell>
))

export const router = {
  route: (config, post) => {
    path = (config && config.route) ? config.route : path
    returnUri = (config && config.parentroute) ? `${config.parentroute}/` : returnUri

    return {
      path,
      getData: () => ({
        post,
      }),
    }
  },
}
