import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote, CheckCircle, TrendingUp, Users, Award } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ReviewsPage() {
  const stats = [
    { label: "Students Helped", value: "50+", icon: Users },
    { label: "Success Rate", value: "95%", icon: TrendingUp },
    { label: "Average Rating", value: "4.9/5", icon: Star },
    { label: "Top Programs", value: "15+", icon: Award },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      program: "Harvard Medical School",
      service: "Application Review",
      rating: 5,
      text: "The personal statement review was incredible. Dr. Johnson helped me articulate my passion for medicine in a way that truly stood out. I got interviews at 8 out of 10 schools I applied to!",
      outcome: "Accepted to Harvard Medical School",
      avatar: "/professional-woman-headshot.png",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      program: "Johns Hopkins Dermatology",
      service: "Residency Consulting",
      rating: 5,
      text: "As someone applying to dermatology, having guidance from an actual derm resident was invaluable. The specialty-specific advice and research strategy planning made all the difference.",
      outcome: "Matched into Johns Hopkins Dermatology",
      avatar: "/professional-man-headshot.png",
    },
    {
      id: 3,
      name: "Emily Watson",
      program: "Stanford Medical School",
      service: "Interview Preparation",
      rating: 5,
      text: "The mock interviews completely transformed my confidence. I went from being terrified of interviews to actually looking forward to them. The question bank practice was spot-on.",
      outcome: "Accepted to Stanford Medical School",
      avatar: "/professional-woman-student.jpg",
    },
    {
      id: 4,
      name: "David Kim",
      program: "UCSF Internal Medicine",
      service: "Application Review",
      rating: 5,
      text: "My activities section was a mess before working with Dr. Johnson. The optimization and strategic positioning of my experiences helped me stand out from thousands of other applicants.",
      outcome: "Matched into UCSF Internal Medicine",
      avatar: "/professional-asian-man.png",
    },
    {
      id: 5,
      name: "Jessica Park",
      program: "Mayo Clinic",
      service: "Interview Preparation",
      rating: 5,
      text: "The confidence building techniques were game-changing. I learned how to tell my story authentically and connect with interviewers on a personal level.",
      outcome: "Accepted to Mayo Clinic Medical School",
      avatar: "/professional-woman-doctor.png",
    },
    {
      id: 6,
      name: "Alex Thompson",
      program: "NYU Dermatology",
      service: "Residency Consulting",
      rating: 5,
      text: "The research strategy planning was incredibly detailed. Dr. Johnson helped me identify the right opportunities and position myself as a competitive dermatology candidate.",
      outcome: "Matched into NYU Dermatology",
      avatar: "/professional-man-doctor.png",
    },
  ]

  const successStories = [
    {
      title: "From Rejection to Top-Tier Acceptance",
      student: "Maria G.",
      story:
        "After being rejected from medical school twice, Maria worked with our team to completely revamp her application strategy. We identified weaknesses in her personal statement and helped her gain meaningful clinical experience. She was accepted to 3 top-tier medical schools the following cycle.",
      outcome: "Accepted to UCLA Medical School",
    },
    {
      title: "Breaking into Competitive Dermatology",
      student: "James L.",
      story:
        "With a Step 1 score below average for dermatology, James needed a strategic approach. Our residency consulting helped him identify unique research opportunities and craft a compelling narrative. He successfully matched into his top choice program.",
      outcome: "Matched into Northwestern Dermatology",
    },
    {
      title: "International Student Success",
      student: "Priya S.",
      story:
        "As an international student, Priya faced unique challenges in the application process. Our comprehensive guidance helped her navigate the complexities and present herself as an ideal candidate for US medical schools.",
      outcome: "Accepted to Mount Sinai Medical School",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold text-balance">Success Stories & Reviews</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            See how our expert guidance has helped students achieve their medical career goals
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Testimonials Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">What Our Students Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-base">{testimonial.name}</CardTitle>
                        <CardDescription className="text-sm">{testimonial.program}</CardDescription>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {testimonial.service}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Quote className="w-6 h-6 text-muted-foreground" />
                    <p className="text-sm leading-relaxed">{testimonial.text}</p>
                    <div className="flex items-center gap-2 pt-2 border-t border-border">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-medium text-green-700">{testimonial.outcome}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Detailed Success Stories</h2>
          <div className="space-y-6">
            {successStories.map((story, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-4">
                      <h3 className="text-xl font-semibold">{story.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{story.story}</p>
                    </div>
                    <div className="space-y-4">
                      <div className="text-center lg:text-left">
                        <p className="text-sm text-muted-foreground">Student</p>
                        <p className="font-semibold">{story.student}</p>
                      </div>
                      <div className="flex items-center gap-2 justify-center lg:justify-start">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="font-medium text-green-700">{story.outcome}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Service Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Reviews by Service</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Application Review</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">4.9/5 (23 reviews)</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  "Transformed my personal statement and activities section completely."
                </p>
                <p className="text-xs text-muted-foreground">- Recent review</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Interview Preparation</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">4.8/5 (18 reviews)</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  "Went from nervous wreck to confident interviewer in just a few sessions."
                </p>
                <p className="text-xs text-muted-foreground">- Recent review</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Residency Consulting</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">5.0/5 (12 reviews)</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  "Insider knowledge from a current resident made all the difference."
                </p>
                <p className="text-xs text-muted-foreground">- Recent review</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-primary text-primary-foreground border-0">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-balance">Ready to Join Our Success Stories?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
              Take the first step toward achieving your medical career goals with expert guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/schedule">Schedule Your Consultation</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/">Learn More About Services</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
