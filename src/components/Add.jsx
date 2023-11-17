import React from 'react'
import Header from './Header'

const Add = () => {
  return (
    <div>
        <Header/>
        <div class="container">
        <div class="row">
          <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
              <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">
                  Id
                </label>
                <input type="text" class="form-control" />
              </div>
              <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">
                  name
                </label>
                <input type="text" class="form-control" />
              </div>
              <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">
                author
                </label>
                <input type="text" class="form-control" />
              </div>
              <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">
                title
                </label>
                <input type="text" class="form-control" />
              </div>
              <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">
                description
                </label>
                <input type="text" class="form-control" />
              </div>
              <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">
                url
                </label>
                <input type="text" class="form-control" />
              </div>
              <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">
                urlToImage
                </label>
                <input type="text" class="form-control" />
              </div>

              <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">
                publishedAt
                </label>
                <input type="text" class="form-control" />
              </div>


              <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">
                
                content
                </label>
                <input type="text" class="form-control" />
              </div>


              <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button class="btn btn-success">register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add