"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, FileText, Users, Upload, CheckCircle } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function SchedulePage() {
  const [serviceType, setServiceType] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    currentStatus: "",
    targetProgram: "",
    urgency: "",
    additionalInfo: "",
    hasDocuments: false,
  })

  const services = [
    {
      id: "application-review",
      title: "Application Review",
      description: "Comprehensive review of personal statements and application materials",
      duration: "60 minutes",
      price: "$150",
      icon: FileText,
    },
    {
      id: "interview-prep",
      title: "Interview Preparation",
      description: "Mock interviews and personalized coaching sessions",
      duration: "45 minutes",
      price: "$120",
      icon: Users,
    },
    {
      id: "residency-consulting",
      title: "Residency Consulting",
      description: "Specialized guidance for residency applications and strategy",
      duration: "75 minutes",
      price: "$200",
      icon: Calendar,
    },
  ]

  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", { serviceType, selectedDate, selectedTime, formData })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-balance">Schedule Your Consultation</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Book a personalized session or submit your application materials for expert review
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Service Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  Select Your Service
                </CardTitle>
                <CardDescription>Choose the type of consultation that best fits your needs</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup value={serviceType} onValueChange={setServiceType} className="space-y-4">
                  {services.map((service) => {
                    const Icon = service.icon
                    return (
                      <div key={service.id} className="flex items-start space-x-3">
                        <RadioGroupItem value={service.id} id={service.id} className="mt-1" />
                        <Label htmlFor={service.id} className="flex-1 cursor-pointer">
                          <Card className="border-2 border-transparent hover:border-secondary/50 transition-colors">
                            <CardContent className="p-4">
                              <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                                  <Icon className="w-5 h-5 text-secondary" />
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-semibold">{service.title}</h3>
                                    <div className="flex items-center gap-2">
                                      <Badge variant="secondary">{service.duration}</Badge>
                                      <Badge variant="outline">{service.price}</Badge>
                                    </div>
                                  </div>
                                  <p className="text-sm text-muted-foreground">{service.description}</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </Label>
                      </div>
                    )
                  })}
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Date & Time Selection */}
            {serviceType && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-secondary" />
                    Select Date & Time
                  </CardTitle>
                  <CardDescription>Choose your preferred appointment slot</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Available Time Slots</Label>
                      <Select value={selectedTime} onValueChange={setSelectedTime}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {time}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Personal Information */}
            {selectedDate && selectedTime && (
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Tell us about yourself and your goals</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentStatus">Current Status</Label>
                      <Select
                        value={formData.currentStatus}
                        onValueChange={(value) => setFormData({ ...formData, currentStatus: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your current status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pre-med">Pre-med Student</SelectItem>
                          <SelectItem value="gap-year">Gap Year</SelectItem>
                          <SelectItem value="medical-student">Medical Student</SelectItem>
                          <SelectItem value="resident">Resident</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="targetProgram">Target Program/Specialty</Label>
                      <Input
                        id="targetProgram"
                        placeholder="e.g., Dermatology, Internal Medicine"
                        value={formData.targetProgram}
                        onChange={(e) => setFormData({ ...formData, targetProgram: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="urgency">Timeline</Label>
                    <Select
                      value={formData.urgency}
                      onValueChange={(value) => setFormData({ ...formData, urgency: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="When do you need assistance?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Within 1 week</SelectItem>
                        <SelectItem value="soon">Within 1 month</SelectItem>
                        <SelectItem value="planning">Within 3 months</SelectItem>
                        <SelectItem value="future">Future planning</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additionalInfo">Additional Information</Label>
                    <Textarea
                      id="additionalInfo"
                      placeholder="Tell us about your specific goals, concerns, or questions..."
                      value={formData.additionalInfo}
                      onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                      rows={4}
                    />
                  </div>

                  {/* Document Upload Option */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="hasDocuments"
                        checked={formData.hasDocuments}
                        onCheckedChange={(checked) => setFormData({ ...formData, hasDocuments: checked as boolean })}
                      />
                      <Label htmlFor="hasDocuments" className="text-sm">
                        I have documents to submit for review (personal statement, CV, etc.)
                      </Label>
                    </div>

                    {formData.hasDocuments && (
                      <Card className="border-dashed border-2 border-secondary/50">
                        <CardContent className="p-6 text-center">
                          <Upload className="w-8 h-8 text-secondary mx-auto mb-4" />
                          <h3 className="font-semibold mb-2">Upload Your Documents</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            Upload your personal statement, CV, or other application materials for review
                          </p>
                          <Button variant="outline" type="button">
                            <Upload className="w-4 h-4 mr-2" />
                            Choose Files
                          </Button>
                          <p className="text-xs text-muted-foreground mt-2">
                            Supported formats: PDF, DOC, DOCX (Max 10MB each)
                          </p>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Submit Button */}
            {formData.firstName && formData.lastName && formData.email && (
              <Card>
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <h3 className="text-lg font-semibold">Ready to Schedule?</h3>
                    <p className="text-muted-foreground">
                      You'll receive a confirmation email with meeting details and next steps.
                    </p>
                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      Confirm Appointment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
