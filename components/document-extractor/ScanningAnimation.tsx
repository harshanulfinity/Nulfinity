"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Upload, Scan, Brain, FileText, CheckCircle, Shield, Tag } from 'lucide-react';

interface ScanningAnimationProps {
  isProcessing: boolean;
  currentStep: string;
  progress: number;
}

// Stages must exactly match the stage keys emitted by main.py _update_stage()
const PROCESSING_STEPS = [
  { id: 'pdf_validation',   label: 'Validating document…',              icon: Shield },
  { id: 'text_extraction',  label: 'Extracting text (AWS Textract)…',   icon: Scan },
  { id: 'classification',   label: 'Classifying document type…',        icon: Tag },
  { id: 'field_extraction', label: 'Extracting structured fields…',     icon: Brain },
  { id: 'validation',       label: 'Validating extracted fields…',      icon: CheckCircle },
  { id: 'finalization',     label: 'Finalizing results…',               icon: FileText },
];

export function ScanningAnimation({ isProcessing, currentStep, progress }: ScanningAnimationProps) {
  const currentStepIndex = PROCESSING_STEPS.findIndex(step => step.id === currentStep);
  
  return (
    <AnimatePresence>
      {isProcessing && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl"
          >
            {/* Scanning Animation */}
            <div className="relative mb-8">
              <div className="w-full h-32 bg-gray-100 rounded-lg overflow-hidden relative">
                {/* Document background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100" />
                
                {/* Scanning line */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                  animate={{ y: [0, 128, 0] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Scanning overlay effect */}
                <motion.div
                  className="absolute inset-0 bg-blue-500 opacity-10"
                  animate={{ opacity: [0, 0.2, 0] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Document icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <FileText className="w-16 h-16 text-gray-400" />
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Progress Steps */}
            <div className="space-y-4 mb-6">
              {PROCESSING_STEPS.map((step, index) => {
                const isActive = index === currentStepIndex;
                const isCompleted = index < currentStepIndex;
                const isUpcoming = index > currentStepIndex;
                
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: index * 0.1 }
                    }}
                    className={`
                      flex items-center space-x-3 p-3 rounded-lg transition-all duration-300
                      ${isActive ? 'bg-blue-50 border border-blue-200' : ''}
                      ${isCompleted ? 'bg-green-50 border border-green-200' : ''}
                      ${isUpcoming ? 'opacity-50' : ''}
                    `}
                  >
                    <div className="relative">
                      {isCompleted ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : isActive ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Loader2 className="w-5 h-5 text-blue-500" />
                        </motion.div>
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${
                        isActive ? 'text-blue-700' : 
                        isCompleted ? 'text-green-700' : 
                        'text-gray-500'
                      }`}>
                        {step.label}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Processing Progress</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
            </div>
            
            {/* Processing Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center text-sm text-gray-500"
            >
              <p>Please wait while we process your document...</p>
              <p className="text-xs mt-1">This may take a few moments depending on file size</p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

