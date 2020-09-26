import { useState, useEffect } from 'react';

export const useTracer = value => {
    return useState(value);
};
