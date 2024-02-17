using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using PatientAdministrationSystem.Application.Entities;
using PatientAdministrationSystem.Application.Repositories.Interfaces;

namespace PatientAdministrationSystem.Infrastructure.Repositories;

public class PatientsRepository : IPatientsRepository
{
    private readonly HciDataContext _context;

    public PatientsRepository(HciDataContext context)
    {
        _context = context;
    }

    public ICollection<PatientEntity> FindAll()
    {
        return _context.Patients.ToList();
    }

    public PatientEntity? FindOne(Guid patientId)
    {
        return _context.Patients.Find(patientId);
    }

    public ICollection<VisitEntity> FindVisitsByPatient(Guid patientId)
    {
        // I'm sure there are better ways to do this Include
        var patient = _context.Patients.Include("PatientHospitals.Visit").FirstOrDefault(p => p.Id == patientId);

        if (patient == null)
        {
            throw new Exception("patient not found");
        }

        return patient.PatientHospitals?.Select(h => new VisitEntity { Id = h.VisitId, Date = h.Visit.Date }).ToList() ?? new List<VisitEntity>();
    }
}