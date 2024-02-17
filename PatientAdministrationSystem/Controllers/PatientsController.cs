using Microsoft.AspNetCore.Mvc;
using PatientAdministrationSystem.Application.Entities;
using PatientAdministrationSystem.Application.Interfaces;
using System.Net;

namespace Hci.Ah.Home.Api.Gateway.Controllers.Patients;

[Route("api/patients")]
[ApiExplorerSettings(GroupName = "Patients")]
[ApiController]
public class PatientsController : ControllerBase
{
    private readonly IPatientsService _patientsService;

    public PatientsController(IPatientsService patientsService)
    {
        _patientsService = patientsService;
    }

    [HttpGet]
    public ICollection<PatientEntity> Get()
    {
        return _patientsService.FindAll();
    }

    [HttpGet("{patientId}")]
    public ActionResult<PatientEntity> Get(Guid patientId) {
        var patient = _patientsService.FindOne(patientId);

        if (patient == null)
        {
            return NotFound(patientId);
        }

        return patient;
    }

    [HttpGet("{patientId}/visits")]
    public ActionResult<VisitEntity[]> GetVisits(Guid patientId)
    {
        try
        {
            return _patientsService.FindVisitsByPatient(patientId).ToArray();
        } catch
        {
            return BadRequest("patientId not found");
        }
    }
}