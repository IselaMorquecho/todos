import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        speed={4}
        width={600}
        height={160}
        viewBox="0 0 650 160"
        backgroundColor="#cae9ff"
        foregroundColor="#1b4965"
        {...props}
    >

        {/* Check */}
        <rect x="24" y="28" rx="0" ry="0" width="24" height="24" />
        {/* Texto */}
        <rect x="72" y="28" rx="0" ry="0" width="600" height="24" />
        {/* Check */}
        <rect x="24" y="78" rx="0" ry="0" width="24" height="24" />
        {/* Texto */}
        <rect x="72" y="78" rx="0" ry="0" width="600" height="24" />
        {/* Check */}
        <rect x="24" y="128" rx="0" ry="0" width="24" height="24" />
        {/* Texto */}
        <rect x="72" y="128" rx="0" ry="0" width="600" height="24" />

    </ContentLoader>
)

export {MyLoader}
