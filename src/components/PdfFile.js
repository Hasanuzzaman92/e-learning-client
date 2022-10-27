import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { useLoaderData } from 'react-router-dom';

const PdfFile = () => {
    const course = useLoaderData();
    console.log(course)
    return (
        <div>
            
        </div>
    );
};

export default PdfFile;