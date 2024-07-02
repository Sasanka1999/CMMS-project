// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteAsset, listAssets } from "../../services/AssetsServices";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ListAssetsComponents = () => {
    const [assets, setAssets] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        getAllAssets();
    }, []);

    function getAllAssets() {
        listAssets()
            .then((response) => {
                setAssets(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function addNewAsset() {
        navigator("/add-asset");
    }

    function updateAsset(assetId) {
        navigator(`/edit-asset/${assetId}`);
    }

    function removeAsset(assetId) {
        console.log(assetId);

        deleteAsset(assetId)
            // eslint-disable-next-line no-unused-vars
            .then((response) => {
                getAllAssets();
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function generatePDF() {
        const input = document.getElementById("assets-table");
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF();
            pdf.addImage(imgData, "PNG", 0, 0);
            pdf.save("assets_report.pdf");
        });
    }

    return (
        <div className="container">
            <h2 className="text-center">List of Assets</h2>
            <div className="d-flex justify-content-between mb-2">
                <button className="btn btn-primary" onClick={addNewAsset}>
                    Add Asset
                </button>
                <button className="btn btn-secondary" onClick={generatePDF}>
                    Generate PDF Report
                </button>
            </div>
            <table id="assets-table" className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Asset ID</th>
                        <th>Asset Name</th>
                        <th>Location</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {assets.map((asset) => (
                        <tr key={asset.assetId}>
                            <td>{asset.assetId}</td>
                            <td>{asset.assetName}</td>
                            <td>{asset.location}</td>
                            <td style={{ whiteSpace: "pre-wrap" }}>{asset.description}</td>
                            <td>
                                <button className="btn btn-info" onClick={() => updateAsset(asset.assetId)}>
                                    Update
                                </button>
                                <button className="btn btn-danger ml-2" onClick={() => removeAsset(asset.assetId)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListAssetsComponents;
