import React, { Component } from "react";
import styles from "./ReleaseArchive.module.scss";
import StatusBar from "./StatusBar";

export default class ReleaseArchive extends Component {
    render() {
        return (
            <section className={styles.wrapper}>
                <h2>Release Archive</h2>
                <StatusBar title={"Release Title"} status={"active"} />
                <StatusBar title={"Release Title"} status={"draft"} />
            </section>
        );
    }
}