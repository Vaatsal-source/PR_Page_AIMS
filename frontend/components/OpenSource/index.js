export default function OpenSource() {
  return (
    <section id="fest-victories" className="showcase-section">
      <div className="showcase-info">
        <span className="showcase-kicker">GSSoC 26</span>
        <h2 className="showcase-title">OpenSource Contributions</h2>
        <p className="showcase-desc">Lumen + Xarray Integration</p>
        <div className="showcase-details">
          <div className="detail-item">
            <div className="detail-tag">Aman Kumar</div>
            <div className="detail-text">
              Lumen supports tabular data processing but it fails to manage
              multi-dimensional scientific data which includes NetCDF and Zarr
              and HDF5, Grib formats. The project develops full Xarray
              functionality for Lumen through integration with Lumen AI which
              enables users to ask scientific questions using natural language
              The project implements cloud data support together with multi file
              dataset handling and coordinate based AI context development The
              HoloViz project received funding from NumFOCUS through their
              Anaconda affiliation to support Aman's work which he completed
              under the guidance of Andrew H and Andy Maloney for a $3000
              stipend. He is the maintainer of the Lumen (HoloViz) repository
              currently and developing more enhancements in it like multiple
              chart support using Vega-lite, hvplot and holoviews and much more
              things and does upstream fixes at Xarray-SQL, Altair, Xarray,
              Xpystac, Jupyterlab.
            </div>
          </div>
        </div>
      </div>

      <div className="image-grid-2x2">
        <div className="showcase-image-wrapper">
          <img src="/GSoC.png" alt="GSSCOC" />
          <div className="image-hover-overlay">
            <div className="overlay-tag">GSoC 26</div>
            <h4 className="overlay-title">Lumen + Xarray</h4>
            <p className="overlay-desc">
              Aman Kumar
            </p>
          </div>
        </div>
        <div className="showcase-image-wrapper">
          <img src="/Anaconda.png" alt="Anaconda Logo" />
          <div className="image-hover-overlay">
            <div className="overlay-tag">ROBOTICS</div>
            <h4 className="overlay-title">Micromouse Maze</h4>
            <p className="overlay-desc">
              Autonomous robotics navigation algorithms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
